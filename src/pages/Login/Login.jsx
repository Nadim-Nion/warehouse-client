import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);

        // clear the previous error message
        setError('');

        // clear the previous success message
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setSuccess('User logged-in successfully');
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
                <h2 className='text-5xl font-bold'>Please Login</h2>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
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
                                <p>New to this website? <span className='mr-2'>Please</span>
                                    <Link to="/register" className="link link-primary">
                                        Register
                                    </Link>
                                </p>
                            </label>
                            <p className='text-center text-green-700 font-semibold'>{success}</p>
                            <p className='text-center text-red-700 font-semibold'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Login</button>
                        </div>
                    </form>
                    <div className="divider divider-info">or</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;