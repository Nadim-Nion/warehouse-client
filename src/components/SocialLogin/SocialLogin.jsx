import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSocialLogIn = () => {

        // Clear previous toast messages
        setSuccess(false);
        setError(false);

        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setSuccess(true);
            })
            .catch(error => {
                console.log(error.message);
                setError(true);
            })
    }


    return (
        <div className='flex justify-center items-center mb-5'>
            {
                success && <div className="toast toast-end toast-middle">
                    <div className="alert alert-info">
                        <span>Success</span>
                    </div>
                    <div className="alert alert-success">
                        <span>User logged-in successfully.</span>
                    </div>
                </div>
            }
            {
                error && <div className="toast toast-end toast-middle">
                    <div className="alert alert-error">
                        <span>Error</span>
                    </div>
                    <div className="alert alert-error">
                        <span>Login Failed.</span>
                    </div>
                </div>
            }
            <button onClick={handleSocialLogIn} className="btn btn-info">
                <FaGoogle />
                Login With Google
            </button>
        </div>
    );
};

export default SocialLogin;