import React from 'react';
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <div style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbDutvcEDsez_fS_AOTKnQEVZ4kVPa17O5A5CA0n0aChEKsSanSaHLVbU0NTbK8B1GxI&usqp=CAU)', backgroundRepeat : 'no-repeat', backgroundSize: 'cover'}}>
        <div className="grid grid-cols-12 justify-center items-center px-6">
            <div className="md:col-span-6 col-span-12 space-y-2 md:order-0 order-1">
                <h1 className="text-4xl medium text-white font-roboto">Hi,</h1>
                <h2 className="text-3xl text-white">I'm <strong className="text-yellow font-medium font-roboto">Nasir Ahmed</strong></h2>
                <div className="text-yellow text-2xl">
                <Typewriter
                    options={{
                        strings: ['A WEB DEVELOPER', 'A DESIGNER', 'A MERN DEVELOPER', 'I LOVE TO DEVELOP'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
                <p className="text-gray-100 font-qsand">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic incidunt maxime sint commodi soluta numquam obcaecati esse architecto sequi vitae!</p>
                <div className="flex justify-start gap-3 py-5">
                    <button className="px-4 bg-blue-600 rounded py-0.5 text-white font-medium">Hire Me</button>
                    <a target="_blank" className="lg:px-4 px-2 py-0.5 bg-gray-600 text-white rounded font-medium">Resume</a>
                </div>
            </div>
            <div className="md:col-span-6 col-span-12 md:order-1 py-2">
                <img src="https://i.ibb.co/bP1b8RX/nasir-1.png" className="w-4/5 mx-auto rounded-full bg-coral" alt="" />
            </div>            
        </div>
        </div>
    );
};

export default Banner;