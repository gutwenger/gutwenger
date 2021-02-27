import React from 'react'

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

const ContactForm = () => {

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.content.value);
    }

    return (
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
                label="Content"
                name="content"
            />
            <button type="submit" className="contactFormSubmit">SEND</button>
        </form>
    )
}

export default ContactForm;