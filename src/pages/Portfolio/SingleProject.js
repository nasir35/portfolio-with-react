import React from 'react';
import { useParams } from 'react-router';

const SingleProject = () => {
    const id = useParams();
    return (
        <div>
            <h2>choosen number {id} project</h2>
        </div>
    );
};

export default SingleProject;