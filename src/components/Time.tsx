import { useEffect, useState } from 'react';
import TimeStyle from './Time.module.css';

const Home = () => {

    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('/time').then(res => res.json()).then(data => {
                setCurrentTime(data.time);
            });
        }, 1000);
        return () => clearTimeout(timer);
    }, [currentTime]);

    return (
        <div className={TimeStyle.time}>{currentTime}</div>
    )};

export default Home;
