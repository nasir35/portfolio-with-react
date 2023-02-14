import React from 'react';
import webDev from '../../images/web-dev.svg'
import react from '../../images/react-icon.svg'
import landingPage from '../../images/landing-page.svg'

const Services = () => {
    const services = [
        {
            icon : webDev,
            title : 'Web Development',
            dp: 'I am developing websites for more than 1year and done a lot of projects. Have a strong knowledge of jsx element.'
        },
        {
            icon : react,
            title : 'React Development',
            dp: 'React is a trending js library which give so many features that help to make the website more user friendly!'
        },
        {
            icon : landingPage,
            title : 'Landing page Design',
            dp: 'I have designed and developed more than 10 landing page those are helping my clients to grow their business significantly!'
        }
    ]
    return (
        <div id="services" className="bg-gray-200 lg:py-10 md:py-8 py-6 text-white lg:px-10 md:px-6 px-3">
            <div className="text-center text-green-custom">
                <h2 className="sm:text-3xl text-2xl font-qsand font-medium">My Services</h2>
                <p className="sm:w-4/5 w-full mx-auto pt-3 text-gray-700">Here is a few category of services that I provide. I have worked on so many projects, related to web app development. So, I will be happy to serve you these kind of service.</p>
            </div>
            <div className="grid lg:grid-cols-3 pt-10 md:grid-cols-2 grid-cols-1 gap-8 gap-y-6 md:px-8 px-2">
                {
                    services.map(service => <div className="shadow-xl space-y-3 bg-gray-900 hover:bg-white hover:text-gray-900 transition ease-linear duration-200 rounded-xl p-8">
                        <div className="overflow-hidden">
                            <img src={service.icon} alt="" className="w-20 overflow-hidden rounded-xl"/>
                        </div>
                        <div className="space-y-3 rounded-b-xl">
                            <h2 className="text-xl font-roboto">{service.title}</h2>
                            <p>{service.dp}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;