import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <button onClick={() => {navigate('/login')}}>Login</button>
            <button onClick={() => {navigate('/dataEntry')}}>Data Entry</button>         
        </div>
    );
}

export default Home;
