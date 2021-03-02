import React from 'react'
import LoadingSmall from '../loading/LoadingSmall'

const ContactFormGrp = ({ type, label, name }) => {

    let input = type === "email" || type === "text"
        ? (
            <input
                id={`contactform-${name}`}
                className="contactformGrp__input" 
                type={type}
                name={name}
                required
            />
        )
        : (
            <textarea
                id={`contactform-${name}`}
                className="contactformGrp__textarea" 
                name={name}
                rows={10}
                required
            />
        )


    return (
        <div className="contactformGrp">
            <label className="contactFormGrp__label" htmlFor={`contactform-${name}`}>
                { label }
            </label>
            { input }
        </div>
    )
}

const ContactForm = ({ sendEmail, isSending }) => {

    function handleSubmit(event) {
        event.preventDefault();
        const FORM = event.target;
        sendEmail({
            name: FORM.name.value,
            email: FORM.email.value,
            message: FORM.message.value
        })

        FORM.name.value = '';
        FORM.email.value = '';
        FORM.message.value = '';
    }

    let display = (
        <form className="contactForm" onSubmit={(event)=>handleSubmit(event)}>
            <h3 className="contactForm__h3">
                Send me a Message!
            </h3>
            <ContactFormGrp
                key={`contactfomgrp-name`}
                type="text"
                label="Name"
                name="name"
            />
            <ContactFormGrp
                key={`contactfomgrp-email`}
                type="email"
                label="Email"
                name="email"
            />
            <ContactFormGrp
                key={`contactfomgrp-content`}
                type="textarea"
                label="MESSAGE"
                name="message"
            />
            <button type="submit" className="contactFormSubmit">SEND</button>
        </form>
    )

    return isSending ? <LoadingSmall key="loading" message="Your message is reaching Fremont!" /> : display;
}

export default ContactForm;