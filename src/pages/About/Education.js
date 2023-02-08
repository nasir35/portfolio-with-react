import React from 'react';
import './Edu.css';

const Education = () => {
    return (
        <div>
            <div className='edu-box'>
                <p></p>
                <h2>SSC <small>on Science</small></h2>
                <h6>Institute: Chilora Purba Amberpur kari Gori High School</h6>
                <p>passed on 2017 with GPA-4.82</p>
            </div>
            <div className='edu-box'>
                <p className='duration'>2019 - 2021</p>
                <h2>HSC <small>on Science</small></h2>
                <h6>Aganagar Degree College</h6>
                <p>passed on 2021 with GPA-5.00</p>
            </div>
            <div className='edu-box'>
                <h2>BSC <small>on Computer Sceience and Technology</small></h2>
                <h6>Institute: Mymensingh Engineering College</h6>
                <p>Running (2022-present)</p>
            </div>
        </div>
    );
};

export default Education;