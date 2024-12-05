import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Header from '../../components/header/Header';
import LocationRestaurant from '../../components/location-restaurant/LocationRestaurant';
import Decision from '../../components/decision/Decision';
import LinkAtTheMenu from '../../components/link-at-the-menu/LinkAtTheMenu';
import BackButton from '../../components/back-button/BackButton';

function LoginMenu() {
    const navigate = useNavigate();
    const handlers = useSwipeable({
        onSwipedRight: () => navigate('/Home'),
        trackMouse: true, 
    });

    return (
        <div {...handlers}>
            <Header />
            <BackButton/>
            <LocationRestaurant />
            <Decision />
            <LinkAtTheMenu />
        </div>
    );
}

export default LoginMenu;