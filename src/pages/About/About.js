import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-500 pt-12 pb-12" style={{backgroundColor: '#F7F7F7'}}>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2">
                    <img src="https://mcodify.com/wp-content/uploads/2021/01/finalcheckup.gif" className="mx-auto h-80" alt="" />
                    {/* <img src="https://developermainuddin.me/wp-content/uploads/2021/08/39998-web-development.gif" alt="" /> */}
                    {/* <img src="http://webcareindia.com/images/website-designing.gif" alt="" /> */}
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex w-full space-x-4 py-3 px-1" style={{backgroundColor: '#D4EEF9'}}>
                    <h2 className="uppercase py-0.5 px-2 bg-gradient-to-r from-red-600 to-pink-700 text-white">About me</h2>
                    <h2 className="uppercase">Skills</h2>
                    <h2 className="uppercase ">Experience</h2>
                    <h2 className="uppercase">Education</h2>
                    </div>
                    <h2 className="uppercase pt-3 pb-6 text-3xl text-coral">Web Designer & Developer</h2>
                    <p className="font-qsand">Hey!! <br />
I am Minhajul Islam Galib from Bangladesh. I always like to design something new to cope up with the world. My new ideas show me, how to be professional and to much originative. Proper activity in a work is important. That's why I always try to give more attention to my work.
<br /> <br />

</p>
                    <button className="w-44 bg-gradient-to-r from-green-custom to-green-700 text-white py-2 text-lg mt-5 rounded">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;