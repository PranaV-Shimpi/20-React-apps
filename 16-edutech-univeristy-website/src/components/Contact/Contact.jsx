import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact container'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Feel free to react out through form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li>Contact@psproject.dev</li>
                <li>+91 123-456-7890</li>
                <li>77 Massachusetts Ave, Pune <br /> MA 072493, India</li>
            </ul>
        </div>
        <div className="contact-col"></div>
    </div>
  )
}

export default Contact