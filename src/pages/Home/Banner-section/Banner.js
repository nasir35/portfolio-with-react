import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import nasir1 from '../../../images/nasir-pass.jpg'
const Banner = () => {
    return (
        <div id="banner" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbDutvcEDsez_fS_AOTKnQEVZ4kVPa17O5A5CA0n0aChEKsSanSaHLVbU0NTbK8B1GxI&usqp=CAU)', backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
        <div className="grid grid-cols-12 justify-center items-center px-6">
            <div className="md:col-span-6 col-span-12 space-y-2 md:order-0 order-1">
                <h1 className="text-4xl text-gray-50 font-qsand font-bold">Welcome,</h1>
                <h2 className="text-3xl text-white">I'm <strong className="text-yellow font-medium font-roboto">Nasir Ahmed</strong></h2>
                <div className="text-coral font-bold font-qsand text-2xl">
                <Typewriter
                    options={{
                        strings: ['WEB DEVELOPER', 'WEB DESIGNER', 'MERN STACK DEVELOPER', 'I LOVE TO DEVELOP'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
                <p className="text-gray-100 font-qsand">I am a passionate web developer and always trying to learn different technologies related to web development. Being a friendly person, I love to take on challenges and always try to fulfill my responsibilities.</p>
                <div className="flex justify-start gap-3 py-5">
                    <Link to="/home#contact" className="md:px-6 px-4 bg-blue-600 rounded py-2 text-white font-medium">Hire Me</Link>
                    <a href="https://drive.google.com/file/d/1-evt0DvyIp6Mcxo4mUHJAcdja2yHLE-0/view" target="_blank" className="lg:px-4 px-2 py-2 bg-gray-600 text-white rounded font-medium"> My Resume</a>
                </div>
            </div>
            <div className="md:col-span-6 col-span-12 md:order-1 py-2">
                <img src={nasir1} className="w-4/5 mx-auto rounded-full bg-coral" alt="" />
            </div>            
        </div>
        </div>
    );
};

export default Banner;