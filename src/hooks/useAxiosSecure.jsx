import axios from 'axios';
import React, { useEffect } from 'react';
import useAuthContext from './useAuthContext';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOut } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('Error tracked in the interceptor', error.response);

            if (error.response.status === 401 || error.response.status === 403) {
                console.log('Log out the user');
                logOut()
                    .then(() => {
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
        })

    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;