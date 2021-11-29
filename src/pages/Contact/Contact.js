import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Contact = e => {
    const form = useRef();
    const {register, handleSubmit, reset} = useForm();
    const [message, setMessage] = useState('');
    
    const sendEmail = data => {
        console.log(data);
    emailjs.sendForm('gmail358', 'contact_form_358', form.current, 'user_l9QH9dZ9tmhhmo8BnNS29')
      .then((result) => {
          if(result.text==='OK'){
              setMessage('We have recieved your message. Thanks for contacting me. Will be to you soon!')
              reset();
          }
      }, (error) => {
          setMessage('')
          console.log(error.text);
      });
    }
    return (
        <div className="py-5" style={{backgroundImage: 'url(https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="text-center">
                <h2 className="inline-block border-coral text-green-custom text-2xl px-4 border-b-4 rounded font-semibold font-qsand">Contact Me!</h2>
            </div>
            <div className="text-center my-3">
                <form ref={form} onSubmit={handleSubmit(sendEmail)} className="md:w-3/6 w-full mx-auto md:px-0 px-2">
                    <input type="text" {...register('name')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Your Name" name="name" required/>
                    <input type="email" {...register('email')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Your Email" name="email" required/>
                    <textarea type="text" {...register('message')} rows="6" className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Write your message here..." name="message" required/>
                    <input type="submit" value="Send Message" className="px-10 mb-3 py-1 rounded cursor-pointer bg-green-custom text-white text-xl" />
                </form>
            </div>
            <p className="text-green-custom text-center">{message}</p>            
        </div>
    );
};

export default Contact;