import React, { useRef, useState } from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import BorderBtn from '../../component/BorderBtn';
import BtnWithBg from '../../component/BtnWithBg';
import { HashLink as Link } from 'react-router-hash-link';

const Contact = e => {
    const [flag, setFlag] = useState(false);
    const form = useRef();
    const {register, handleSubmit, reset} = useForm();
    const [message, setMessage] = useState('');
    const [formBox, setState] = useState({
        name : '',
        mail : '',
        msg : ''
    });

    const closeModal = e => {
        setFlag(false);
    }
    const Modal = () => {
        return (
            <div className='modal-container bg-gray-300 h-96 flex lg:w-3/5 md:w-4/5 w-full rounded-sm space-y-4 flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 m-auto p-2'>
                <button onClick={closeModal} className='absolute top-0 right-0 py-2 px-4 rounded-full bg-indigo-500 shadow-lg text-white hover:bg-white hover:border-4 hover:shadow-none hover:text-indigo-500 hover:border-indigo-500 m-2'>X</button>
                <div className='shadow-inner lg:w-3/5 md:w-4/5 w-full border border-gray-700 lg:p-5 md:p-3 p-2 rounded-lg'>
                    <h2 className='font-bold w-full py-2 text-indigo-700'><i className="fas fa-eye"></i> Summary :</h2>
                    <div className='w-full bg-white shadow-sm rounded lg:p-5 p-2'>
                        <h4> <bold className='font-bold font-roboto'>Name:</bold> <span className='font-qsand font-medium text-indigo-600'>{formBox.name}</span></h4>
                        <p ><bold className='font-bold font-roboto'>E-mail from: </bold><address className='font-qsand font-medium inline-block'>{formBox.mail}</address></p>
                        <p className='font-qsand font-medium'><bold className='font-bold font-roboto'>Message: </bold> {formBox.msg}</p>
                    </div>
                </div>
                <h2>{message}</h2>
                <div className='flex space-x-5 py-5'>
                    <button onClick={closeModal}><Link smooth to = "/home#banner"><BorderBtn>Go To Home</BorderBtn></Link></button>
                    <button onClick={closeModal}><BtnWithBg>Okay</BtnWithBg></button>
                </div>
            </div>
        );
    }
    const sendEmail = data => {
        setState({ name : data.name, mail : data.email, msg : data.message});
        console.log(data);
        emailjs.sendForm('gmail358', 'contact_form_358', form.current, 'user_l9QH9dZ9tmhhmo8BnNS29')
        .then((result) => {
            if(result.text==='OK'){
                setMessage('Recieved your message. Thanks for contacting me. Will be reach to you soon!');
                reset();
            }
        }, (error) => {
            setMessage('Oops! An error Occured. Please Try Again or Contact me through Linkedin. Thanks for your Interest!');
            console.log(error.text);
        });
        setFlag(true);
    }
    return (
        <div id="contact" className="py-5" style={{backgroundImage: 'url(https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="text-center py-5 space-y-2">
                <h2 className="inline-block border-coral text-green-custom sm:text-4xl text-3xl px-4 border-b-4 rounded font-semibold font-qsand">Contact Me!</h2>
                <p className="md:w-3/4 w-full px-2 mx-auto pb-4 sm:text-base text-sm" style={{color: '#DCE9F0'}}>It's a pleasure to be connected with people. Please contact me if you wanna say hi or ask any questions or any discussion. I will back to you as early as possible.!</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 relative mx-auto">
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
                {flag ? <Modal></Modal>: <p></p>}
            </div>            
        </div>
    );
};

export default Contact;