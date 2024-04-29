import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser, verifyEmail } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [toast, setToast] = useState(false);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        console.log(user);

        // clear the previous error message
        setError('');

        // clear the previous success message
        setSuccess('');

        // clear the previous toast message
        setToast(false);

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                setSuccess('User created successfully');
                verifyEmail(newUser)
                    .then(() => {
                        setToast(true);
                    })
                    .catch(() => {
                        console.log(error.message);
                    })
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h2 className='text-5xl font-bold'>Register Your Account</h2>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have an account? <span className='mr-2'>Please</span>
                                    <Link to="/login" className="link link-primary">
                                        Login
                                    </Link>
                                </p>
                            </label>
                            <p className='text-center text-green-700 font-semibold'>{success}</p>
                            <p className='text-center text-red-700 font-semibold'>{error}</p>
                        </div>
                        {
                            toast && <div className="toast toast-end toast-middle">
                                <div className="alert alert-info">
                                    <span>Email verified successfully.</span>
                                </div>
                                <div className="alert alert-success">
                                    <span>Please check your email.</span>
                                </div>
                            </div>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;