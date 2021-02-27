import React from 'react'
import ContactForm from './ContactForm'
import ContactSocial from './ContactSocial'

const Contact = ({ mainConRef }) => {
    return (
        <div className="contact" ref={mainConRef}>
            <div className="contact__header">
                <h2 className="contact__header__h2">
                    CONTACT ME
                </h2>
            </div>
            <ContactForm
                key="contactform"
            />
            <ContactSocial
                key="contactsocial"
            />
        </div>
    )
}

export default Contact;