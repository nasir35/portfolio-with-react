import React from 'react';
import webDev from '../../images/web-dev.svg'
import react from '../../images/react-icon.svg'
import landingPage from '../../images/landing-page.svg'

const Services = () => {
    const services = [
        {
            icon : webDev,
            title : 'Web Development',
            dp: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias repellendus recusandae mollitia necessitatibus sequi.'
        },
        {
            icon : react,
            title : 'React Development',
            dp: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias repellendus recusandae mollitia necessitatibus sequi.'
        },
        {
            icon : landingPage,
            title : 'Landing page Design',
            dp: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias repellendus recusandae mollitia necessitatibus sequi.'
        }
    ]
    return (
        <div className="bg-gray-200 py-10 text-white px-10">
            <div className="text-center text-green-custom">
                <h2 className="text-3xl font-qsand font-medium">My Services</h2>
                <p className="w-4/5 mx-auto pt-3 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam esse ipsam, saepe earum, accusantium laborum aliquid voluptates labore vel odit eligendi perferendis at voluptate minus beatae id laudantium temporibus!</p>
            </div>
            <div className="grid lg:grid-cols-3 pt-10 md:grid-cols-2 grid-cols-1 gap-8 gap-y-6 md:px-8 px-3">
                {
                    services.map(service => <div className="shadow-xl space-y-3 bg-gray-900 rounded-xl p-8">
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