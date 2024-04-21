import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import BorderBtn from "../../component/BorderBtn";
import BtnWithBg from "../../component/BtnWithBg";
import { Link } from "react-scroll";
import closeIcon from "../../images/close-icon.png";
import contactBg from "../../images/contact-bg.png";
import contactPic from "../../images/contact-pic.png";

const Contact = (e) => {
  const [flag, setFlag] = useState(false);
  const form = useRef();
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const [formBox, setState] = useState({
    name: "",
    mail: "",
    msg: "",
  });

  const closeModal = (e) => {
    setFlag(false);
  };
  useEffect(() => {
    if (flag) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [flag]);
  const Modal = () => {
    return (
      <div className="overlay">
        <div className="response-modal lg:w-3/5 md:w-4/5 w-full flex flex-col justify-center items-center bg-white">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 p-1 rounded-full shadow-lg text-white bg-red-500  hover:shadow-none m-2">
            <img src={closeIcon} className="w-[50px]" alt="close-icon" />
          </button>
          <div className="shadow-inner lg:w-3/5 md:w-4/5 w-full border border-gray-700 lg:p-5 md:p-3 p-2 rounded-lg">
            <h2 className="font-bold w-full py-2 text-indigo-700">
              <i className="fas fa-eye"></i> Summary :
            </h2>
            <div className="w-full bg-white shadow-sm rounded lg:p-5 p-2">
              <h4>
                {" "}
                <b className="font-bold font-roboto">Name:</b>{" "}
                <span className="font-qsand font-medium text-indigo-600">{formBox.name}</span>
              </h4>
              <p>
                <b className="font-bold font-roboto">E-mail from: </b>
                <i className="font-qsand font-medium inline-block">{formBox.mail}</i>
              </p>
              <p className="font-qsand font-medium">
                <b className="font-bold font-roboto">Message: </b> {formBox.msg}
              </p>
            </div>
          </div>
          <h2 className="text-green-custom font-medium italic">{message}</h2>
          <div className="flex space-x-5 py-5">
            <div onClick={closeModal}>
              <Link smooth to="/home">
                <BorderBtn>Go To Home</BorderBtn>
              </Link>
            </div>
            <div onClick={closeModal}>
              <BtnWithBg>Okay</BtnWithBg>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const sendEmail = (data) => {
    setState({ name: data.name, mail: data.email, msg: data.message });
    console.log(data);
    emailjs.sendForm("gmail358", "contact_form_358", form.current, "user_l9QH9dZ9tmhhmo8BnNS29").then(
      (result) => {
        console.log(result);
        if (result.status === 200) {
          setMessage("Recieved your message. Thanks for contacting me. Will be reach to you soon!");
          reset();
        }
      },
      (error) => {
        setMessage(
          "Oops! An error Occured. Please Try Again or Contact me through Linkedin. Thanks for your Interest!"
        );
        console.log(error.text);
      }
    );
    setFlag(true);
    console.log(flag);
  };
  return (
    <div
      id="contact"
      className="py-5"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="text-center py-5 space-y-2">
        <h2 className="inline-block border-coral text-green-custom sm:text-4xl text-3xl px-4 border-b-4 rounded font-semibold font-qsand">
          Contact Me!
        </h2>
        <p className="md:w-3/4 w-full px-2 mx-auto pb-4 sm:text-base text-sm" style={{ color: "#DCE9F0" }}>
          It's a pleasure to be connected with people. Please contact me if you wanna say hi or ask any questions or any
          discussion. I will back to you as early as possible.!
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 relative mx-auto">
        <div className="md:block hidden p-3">
          <img src={`${contactPic}`} className="lg:w-[70%] w-full mx-auto" alt="vector art" />
        </div>

        <div className="text-center my-3 bg-gray-600 shadow-xl rounded py-2 mx-4">
          <h2 className="text-2xl text-white py-4">Contact me</h2>
          <form ref={form} onSubmit={handleSubmit(sendEmail)} className="md:w-5/6 w-full mx-auto md:px-0 px-2">
            <input
              type="text"
              {...register("name")}
              className="block w-full border-2 rounded px-3 py-1 mb-3"
              placeholder="Your Name"
              name="name"
              required
            />
            <input
              type="email"
              {...register("email")}
              className="block w-full border-2 rounded px-3 py-1 mb-3"
              placeholder="Your Email"
              name="email"
              required
            />
            <textarea
              type="text"
              {...register("message")}
              rows="6"
              className="block w-full border-2 rounded px-3 py-1 mb-3"
              placeholder="Write your message here..."
              name="message"
              required
            />
            <input
              type="submit"
              value="Send Message"
              className="px-10 mb-3 py-2 rounded cursor-pointer bg-coral hover:bg-green-custom text-white text-xl"
            />
          </form>
        </div>
      </div>
      {flag && <Modal></Modal>}
    </div>
  );
};

export default Contact;
