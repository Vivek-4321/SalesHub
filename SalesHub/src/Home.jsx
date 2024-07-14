import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import getCookie from './utils/getCookie';

const Home = () => {

    const navigate = useNavigate();    

    useEffect(() => {
        const user_id = getCookie('user_id');
        console.log("User id: ", user_id);

        if (!user_id) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
        </>
    );
}

export default Home;
