import React from 'react'

const ContactSocialGrp = ({ icon, name, link }) => {
    return (
        <a className="contactSocialGrp" href={ link }>
            <i className={`contactSocialGrp__i ${icon}`} />
            <p className="contactSocialGrp__p">
                { name }
            </p>
        </a>
    )
}


const ContactSocial = () => {
    return (
        <div className="contactSocial">
            <ContactSocialGrp
                key="contactsocialgrp-linkedin"
                icon="fab fa-linkedin-in"
                link="https://www.linkedin.com/in/fremontcheng/"  
                name="https://www.linkedin.com/in/fremontcheng/"  
            />
            <ContactSocialGrp
                key="contactsocialgrp-github"
                icon="fab fa-github"
                link="https://github.com/gutwenger/"
                name="https://github.com/gutwenger/"
            />
            <ContactSocialGrp
                key="contactsocialgrp-angellist"
                icon="fas fa-envelope"
                link="mailto:fremontchengwork@gmail.com"    
                name="fremontchengwork@gmail.com"    
            />
        </div>
    )
}

export default ContactSocial;