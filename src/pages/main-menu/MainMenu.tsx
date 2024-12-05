import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import CategoryCard from "../../components/category-card/CategoryCard";
import Header from "../../components/header/Header";
import BackButton from '../../components/back-button/BackButton';

function MainMenu() {
    const navigate = useNavigate();
    const handlers = useSwipeable({
        onSwipedLeft: () => navigate('/Nigiri1'),
        onSwipedRight: () => navigate('/Login-Menu'),
        trackMouse: true,
    });

    return (
        <div {...handlers}>
            <Header />
            <BackButton/>
            <CategoryCard />
        </div>
    );
}

export default MainMenu;
