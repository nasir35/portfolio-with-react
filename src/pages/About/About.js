import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-500 lg:py-12 md:py-9 py-6 shadow" style={{backgroundColor: '#F7F7F7'}}>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="px-4 py-2">
                    <img src="https://mcodify.com/wp-content/uploads/2021/01/finalcheckup.gif" className="mx-auto lg:h-80 md:h-auto" alt="" />
                    {/* <img src="https://developermainuddin.me/wp-content/uploads/2021/08/39998-web-development.gif" alt="" /> */}
                    {/* <img src="http://webcareindia.com/images/website-designing.gif" alt="" /> */}
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex w-full space-x-4 py-3 px-1 md:text-base sm:text-sm text-xs" style={{backgroundColor: '#D4EEF9'}}>
                    <h2 className="uppercase py-0.5 px-2 bg-gradient-to-r from-red-600 to-pink-700 text-white">About me</h2>
                    <h2 className="uppercase">Skills</h2>
                    <h2 className="uppercase ">Experience</h2>
                    <h2 className="uppercase">Education</h2>
                    </div>
                    <div className="md:px-0 px-3">
                    <h2 className="uppercase pt-3 md:pb-6 pb-3 lg:text-3xl md:text-2xl text-xl text-coral">Web Designer & Developer</h2>
                    <p className="font-qsand">Hey!! <br />
I am Nasir Ahmed from Bangladesh. I always like to design something new to cope up with the world. My new ideas show me, how to be professional and originative. Proper activity in a work is important. That's why I always try to give more attention to my work.
<br /> <br />

</p>
                    <a href="https://drive.google.com/u/0/uc?id=1-evt0DvyIp6Mcxo4mUHJAcdja2yHLE-0&export=download" target="_blank" className="w-44 text-center block bg-gradient-to-r from-green-custom to-green-700 text-white py-2 text-lg lg:mt-5 md:mt-3  rounded">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;