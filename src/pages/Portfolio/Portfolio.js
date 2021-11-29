import React from 'react';
import bikemart from '../../images/project-1.png'
import footprints from '../../images/project-2.png'
import medicare from '../../images/project-3.png'
import tastyFoodHub from '../../images/project-4.png'
import HondaCBR from '../../images/project-5.png'
import TechyTeach from '../../images/project-6.png'
const Portfolio = () => {
    const data = [
        {
            img : bikemart,
            title: 'Bike Mart',
            details: `Overview:
            Bikemart is a single page web app with a dashboard  where people can buy bikes of different categories. Can see their order list and can manage them. 
            The dashboard is designed with Tailwind CSS and made functional with react-router-dom@5.0. 
            Implemented JWT token to ensure the security of admin access.
            The dashboard is designed differently for user and admin. An admin can manage orders, products. He can add a Product or Blog and can make a user admin too. 
            
                 Technology used : React.js, Tailwind CSS, Firebase Authentication, Node.js, Express.js, MongoDB.`,
            liveSite: 'https://bikemart-by-nasir.web.app/',
            clientSideCode: 'https://github.com/nasir35/Bikemart-client-side',
            serverSideCode: 'https://github.com/nasir35/Bikemart-server-side',
        },
        {
            img : footprints,
            title: 'FootPrints',
            details: `Overview:
            Users can see packages of Footprints and can purchase one. 
            Implemented Splide js and Firebase Authentication and stored data on MongoDB.
            Users can see their order list and can manage them.
            
            Technology used : React.js, Tailwind CSS, Splide.js, Firebase, Node.js, Express.js, MongoDB.`,
            liveSite: 'https://footprints-by-nasir.web.app/',
            clientSideCode: 'https://github.com/nasir35/footprints-client-side',
            serverSideCode: 'https://github.com/nasir35/footprints-server-side',
        },
        {
            img : medicare,
            title: 'Medicare',
            details: `Overview:
            Medicare Hospital is a single page web app where people are able to select medical services which they want and can book an appointment by filling up a form of information.
            Implemented Email, Google, Github and Facebook Authentication. So that users can simply register or login.
            Implemented React-router and ensured Authwall for private routes.
            
                Technology Used : React.js, Tailwind CSS, React-router, Firebase Authentication.`,
            liveSite: 'https://medicare-hospital-bd.web.app/',
            clientSideCode: 'https://github.com/nasir35/medicare-hospital',
            serverSideCode: 'No server side',
        },
        {
            img : tastyFoodHub,
            title: 'Tasty Food Hub',
            details: `Overview:
            Bikemart is a single page web app with a dashboard  where people can buy bikes of different categories. Can see their order list and can manage them. 
            The dashboard is designed with Tailwind CSS and made functional with react-router-dom@5.0. 
            Implemented JWT token to ensure the security of admin access.
            The dashboard is designed differently for user and admin. An admin can manage orders, products. He can add a Product or Blog and can make a user admin too. 
            
                 Technology used : React.js, Tailwind CSS, Firebase Authentication, Node.js, Express.js, MongoDB.`,
            liveSite: 'https://nasir35.github.io/tasty-food-hub/',
            clientSideCode: 'https://github.com/nasir35/tasty-food-hub',
            serverSideCode: 'No server side',
        },
        {
            img : HondaCBR,
            title: 'Honda',
            details: `Overview:
            Bikemart is a single page web app with a dashboard  where people can buy bikes of different categories. Can see their order list and can manage them. 
            The dashboard is designed with Tailwind CSS and made functional with react-router-dom@5.0. 
            Implemented JWT token to ensure the security of admin access.
            The dashboard is designed differently for user and admin. An admin can manage orders, products. He can add a Product or Blog and can make a user admin too. 
            
                 Technology used : React.js, Tailwind CSS, Firebase Authentication, Node.js, Express.js, MongoDB.`,
            liveSite: 'https://honda-cbr-assignment-by-nasir.netlify.app/',
            clientSideCode: 'https://github.com/nasir35/Honda-CBR',
            serverSideCode: 'No server side',
        },
        {
            img : TechyTeach,
            title: 'Techy Teach',
            details: `Overview:
            Bikemart is a single page web app with a dashboard  where people can buy bikes of different categories. Can see their order list and can manage them. 
            The dashboard is designed with Tailwind CSS and made functional with react-router-dom@5.0. 
            Implemented JWT token to ensure the security of admin access.
            The dashboard is designed differently for user and admin. An admin can manage orders, products. He can add a Product or Blog and can make a user admin too. 
            
                 Technology used : React.js, Tailwind CSS, Firebase Authentication, Node.js, Express.js, MongoDB.`,
            liveSite: 'https://techy-teach-by-nasir.netlify.app/',
            clientSideCode: 'https://github.com/techy-teach',
            serverSideCode: 'No server side',
        },
    ]
    return (
        <div className="py-8">
            <h2 className="text-2xl font-medium font-roboto text-center text-green-custom">Portfolio</h2>
            <h2 className="text-3xl font-qsand font-medium text-center text-stromboli pb-5">My Latest Works!</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 md:px-8 px-3">
                {
                    data.map(dt => <div className="shadow-xl border-2 border-stromboli rounded-xl">
                        <div className=" h-80 overflow-hidden">
                            <img src={dt.img} alt="" className="w-full block overflow-hidden rounded-xl"/>
                        </div>
                        <div className="flex justify-between px-2 bg-gray-400 py-1 rounded-b-xl">
                            <h2 className="text-xl font-roboto">{dt.title}</h2>
                            <button className="text-lg text-blue-700 rounded">Details</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Portfolio;