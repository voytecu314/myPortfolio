import './Contact.css'
import { MdAlternateEmail } from 'react-icons/md';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { VscGithub } from 'react-icons/vsc';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result);
          if(result.status===200) setIsSubmitted(true)
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }

  return (
    <div id="Contact" className="content-components" >

      <div id='contacts'>

          <div id='form-container'>
            <form id="contact-form" ref={form} onSubmit={submitForm}>
              <h2>Please leave a message</h2>
              <input type="text" name="name" placeholder="Your Name" required/>
              <input type="email" name="email" placeholder='Your Email' 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required/>
              <input type="text" name="subject" placeholder="Subject" required/>
              <textarea name="message" form="contact-form" id="message" cols="50" rows="10" placeholder='Type your message here'></textarea>
              {isSubmitted ? <p>Thank you for submitting your message!</p> :<button>Submit</button>}
            </form>
          </div>
          <div id="alt-contact">
            <section>
              <h3>Contact information</h3>
              <p>Open for any comment, suggestion and collaboration</p>
            </section>
            <section id="contact-links">
              <a href="mailto:wojtek.urbanski.web.dev@gmail.com">
                <span><MdAlternateEmail /> </span>
                <span>Email</span>
                <span>wojtek.urbanski.web.dev@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/wojciech-urbanski-web-dev/" rel="noreferrer" target="_blank">
                <span><TiSocialLinkedinCircular /></span>
                <span>LinkedIn</span>
                <span>https://www.linkedin.com/in/wojciech-urbanski-web-dev</span>
              </a>
              <a href="https://github.com/voytecu314" rel="noreferrer" target="_blank">
                <span><VscGithub /></span>
                <span>GitHub</span>
                <span>https://github.com/voytecu314</span>
              </a>
            </section>
          </div>

      </div>
      

    </div>
  )
}

export default Contact;
