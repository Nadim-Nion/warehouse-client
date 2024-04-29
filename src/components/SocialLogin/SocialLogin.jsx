import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='flex justify-center items-center'>
            <button className="btn btn-info">
                <FaGoogle />
                Button
            </button>
        </div>
    );
};

export default SocialLogin;