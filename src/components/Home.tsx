import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { platforms } from '../assets/platforms';
import HomeStyle from './Home.module.css';

const Home = () => 
    <div className={HomeStyle.home}>
        <span>Welcome!</span>
        <div>Choose your platform</div>
        <div className={HomeStyle.container}>
            {platforms.map((platform) => (
                <div
                    key={platform.id}
                    className={`${HomeStyle.item} ${platform.style}`}
                >
                    <FontAwesomeIcon icon={platform.icon} className={HomeStyle.itemIcon}/>
                    <div className={HomeStyle.itemText}>{platform.header}</div>
                </div>
            ))}
        </div>
    </div>;

export default Home;
