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
            <div className="text-center py-5 space-y-2">
                <h2 className="inline-block border-coral text-green-custom sm:text-4xl text-3xl px-4 border-b-4 rounded font-semibold font-qsand">Contact Me!</h2>
                <p className="md:w-3/4 w-full px-2 mx-auto pb-4 sm:text-base text-sm" style={{color: '#DCE9F0'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe consectetur quas consequuntur, dolor, eligendi numquam rem atque impedit eaque sequi praesentium quo ipsa a delectus officia nisi dolorum architecto!</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="md:block hidden p-3">
                    <img src="https://i.ibb.co/6FSWYnS/b78b7986b0964ce42f8fc93b6fcbea6d.png" className="lg:w-4/5 w-full mx-auto" alt="" />
                </div>
                
                <div className="text-center my-3 bg-gray-700 shadow-xl rounded py-2 mx-4">
                    <h2 className="text-2xl text-white py-4">Contact me</h2>
                    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="md:w-5/6 w-full mx-auto md:px-0 px-2">
                        <input type="text" {...register('name')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Your Name" name="name" required/>
                        <input type="email" {...register('email')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Your Email" name="email" required/>
                        <textarea type="text" {...register('message')} rows="6" className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Write your message here..." name="message" required/>
                        <input type="submit" value="Send Message" className="px-10 mb-3 py-1 rounded cursor-pointer bg-green-custom text-white text-xl" />
                    </form>
                </div>
                <p className="text-green-custom text-center">{message}</p>
            </div>            
        </div>
    );
};

export default Contact;