import React, { useState } from "react";
// Added sweetalert2 to the project to give clean messages to the user.
import Swal from "sweetalert2";
// Import CSS Styles from the Contact.CSS file
import "./Contact.css";

// Import SVG Icons
import GmailIcon from "../../../src/assets/gmailIcon.svg";
import PhoneIcon from "../../../src/assets/phoneIcon.svg";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        // Show a success message using SweetAlert
        Swal.fire({
            icon: "success",
            title: "Form Submitted!",
            text: "We will get back to you soon.",
            confirmButtonText: "Ok",
        });
        // Clear the form fields after submission
        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <section className="contact" id="contact">
            <h2>If you have any work you need done please feel free to contact me!!</h2> 
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        placeholder="Enter your email"
                        />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        type="message"
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        required
                        rows="5"
                        cols="50"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
                <div className="icon-container">
                <a href="mailto:jheeebertwd@gmail.com">
                    <img src={GmailIcon} alt="Gmail" style={{ width: "75px", height: "75px", marginRight: "180px" }} />
                </a>
                <a href="tel:+14072425569">
                    <img src={PhoneIcon} alt="Phone" style={{ width: "75px", height: "75px" }} />
                </a>
                </div>
            </form>
        </section>
    );
};

export default Contact;
