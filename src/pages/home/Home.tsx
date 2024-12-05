import './Home.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/Login-Menu');
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <div className='home-container'>
                <Header />
                <div className='home-image'>
                    <img src='public/image-removebg.png' alt='Kibo' />
                </div>
            </div>
        </>
    );
}

export default Home;
