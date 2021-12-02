import React from 'react';
import { Link } from 'react-router-dom';
import bikemart from '../../images/project-1.png'
import footprints from '../../images/project-2.png'
import medicare from '../../images/project-3.png'
import tastyFoodHub from '../../images/project-4.png'
import HondaCBR from '../../images/project-5.png'
import TechyTeach from '../../images/project-6.png'
const Portfolio = () => {
    const data = [
        {
            id: 1,
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
            id: 2,
            img : footprints,
            title: 'FootPrints',
            details: `Overview:
            Users can see packages of Footprints and can purchase one. Implemented Splide js and Firebase Authentication and stored data on MongoDB.
            Users can see their order list and can manage them.
            
            Technology used : React.js, Tailwind CSS, Splide.js, Firebase, Node.js, Express.js, MongoDB.`,
            liveSite: 'https://footprints-by-nasir.web.app/',
            clientSideCode: 'https://github.com/nasir35/footprints-client-side',
            serverSideCode: 'https://github.com/nasir35/footprints-server-side',
        },
        {
            id:3,
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
            id:4,
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
            id:5,
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
            id: 6,
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
    ];

    return (
        <div className="py-8">
            <h2 className="text-xl font-medium font-roboto text-center text-green-custom">Portfolio</h2>
            <h2 className="sm:text-4xl text-3xl font-qsand font-medium text-center text-stromboli pb-5">My Latest Works!</h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 gap-y-6 pt-6 md:px-8 px-3">
                {
                    data.slice(0,4).map(dt => <div className="grid grid-cols-12 border rounded-xl" style={{borderColor: '#313552'}}>
                        <div className="shadow-xl sm:rounded-tl-xl sm:col-span-11 col-span-12">
                        <div className=" h-80 overflow-hidden">
                            <img src={dt.img} alt="" className="w-full block overflow-hidden sm:rounded-tl-xl sm:rounded-tr-none rounded-t-xl"/>
                        </div>
                        <div className="px-2 space-y-2 sm:rounded-bl-xl rounded-bl-none pb-3" style={{backgroundColor: '#313552'}}>
                            <h2 className="text-xl text-center pt-4 font-roboto text-white">{dt.title}</h2>
                            <p className="text-gray-200 text-center">{dt.details.split(' ').slice(0,30).toString().replaceAll(',' || '.',' ')}</p>
                        </div>
                    </div>
                    <div className="flex sm:flex-col justify-center gap-y-5 py-1 sm:col-span-1 col-span-12 sm:rounded-r-xl rounded-r-none sm:rounded-bl-none rounded-b-xl" style={{backgroundColor: '#313552'}}>
                                <Link to={`/portfolio/${dt.id}`} className="text-2xl text-red-100 borde border-coral px-2 block text-center"><i class="fas fa-info-circle" title="Details"></i></Link>
                                <a href={dt.liveSite} target="_blank" className="text-2xl block text-center font-roboto borer px-2" style={{color: '#FFC576', borderColor: '#FFC576'}}><i class="fab fa-firefox" title="Visit"></i></a>
                                <a href={dt.clientSideCode} target="_blank" className="text-2xl block text-center text-white border-coral borde px-2"><i class="fab fa-github" title="github"></i></a>
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Portfolio;