import { useEffect, useState } from 'react';

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
        <div>{currentTime}</div>
    )};

export default Home;
