import React from "react";
// Style
import "./ContactForm.css"


const ContactForm = () => {
    return (
        <div>
            <div className="title-head">
               <h2> Contact Me</h2>
               <p>Hi there, contact me to ask me about anything you have  in mind.</p>
            </div>

            <form action="#">
                First name
                <input type="text" placeholder="Enter your first name" />

                Email <input type="email" placeholder="yourname@email.com" />
            </form>
        </div>
    )
}

export default ContactForm;