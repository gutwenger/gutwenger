import React, { useState } from 'react'
import ContactForm from './ContactForm'
import ContactSocial from './ContactSocial';

const Contact = ({ mainConRef }) => {

    const [isSending, setIsSending] = useState(false);

    function sendEmail({ name, email, message }) {
        setIsSending(true);

        window.Email.send({
            Host : process.env.REACT_APP_SMTP_HOST,
            Username : process.env.REACT_APP_SMTP_USERNAME,
            Password : process.env.REACT_APP_SMTP_PASSWORD,
            To : 'fremontchengportfolio@gmail.com',
            From : process.env.REACT_APP_SMTP_EMAIL,
            Subject : "Someone visted your portfolio wanted to get in touch with you!",
            Body : `
                <p>Dear Fremont,</p>
                <br />
                <p>Someone visted your portfolio wanted to get in touch with you:</p>
                <br />
                <p>Name: ${ name }</p>
                <p>Email: ${ email }</p>
                <p>Message: ${ message }</p>
                <br />
                <br />
                <p>Best,</p>
                <p>Fremont's Portfolio</p>
            `
        }).then(result => {
            setIsSending(false);
        }
        );
    }

    return (
        <div className="contact" ref={mainConRef}>
            <div className="contact__header">
                <h2 className="contact__header__h2">
                    CONTACT ME
                </h2>
            </div>
            <ContactForm
                key="contactform"
                sendEmail={ sendEmail }
                isSending={ isSending }
            />
            <ContactSocial
                key="contactsocial"
            />
        </div>
    )
}

export default Contact;