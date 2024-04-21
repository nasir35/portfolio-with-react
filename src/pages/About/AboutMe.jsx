import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h2 className="uppercase pt-3 md:pb-6 pb-3 lg:text-3xl md:text-2xl text-xl text-coral">Frontend Web Developer</h2>
      <p className="font-qsand">
        Hey!! <br />
        I am Nasir Ahmed from Bangladesh. I always like to design something new to cope up with the world. My new ideas
        show me, how to be professional and originative. Proper activity in a work is important. That's why I always try
        to give more attention to my work.
        <br /> <br />
      </p>
      <a
        href="https://drive.google.com/u/0/uc?id=1-evt0DvyIp6Mcxo4mUHJAcdja2yHLE-0&export=download"
        target="blank"
        className="w-44 text-center block bg-gradient-to-r from-green-custom to-green-700 text-white py-2 text-lg lg:mt-5 md:mt-3  rounded">
        Download Resume
      </a>
    </div>
  );
};

export default AboutMe;
