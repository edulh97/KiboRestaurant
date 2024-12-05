import './Card.css';
import TopSellerIcon from '../../../public/TopSellerIcon.png';
import nigiris from '../../../public/nigiris.png';
import makis from '../../../public/makis.png';
import favsicon from '../../../public/favsicon.png';
import { useNavigate } from 'react-router-dom';

function Cards() {
    const navigate = useNavigate();
    return (
        <>
            <div className='cards-container'>
                <div className="Category-card">
                    <div className="Image-container">
                        <img src={TopSellerIcon} alt="Category Icon" />
                    </div>
                    <div className="Text-container">
                        <p className="Category-text">TOP SELLER</p>
                    </div>
                </div>
                <div className="Category-card-nigiris" onClick={() => navigate("/Nigiri1")}>
                    <div className="Text-container">
                        <p className="Category-text">NIGIRIS</p>
                    </div>
                    <div className="Image-container-nigiris">
                        <img src={nigiris} alt="Category Icon" />
                    </div>
                </div>
                <div className="Category-card-makis">
                    <div className="Image-container">
                        <img src={makis} alt="Category Icon" />
                    </div>
                    <div className="Text-container">
                        <p className="Category-text">MAKIS</p>
                    </div>
                </div>
                <div className="Category-card-favs" onClick={() => navigate("/Favorites")}>
                    <div className="Text-container">
                        <p className="Category-text">YOUR FAVS!</p>
                    </div>
                    <div className="Image-container">
                        <img src={favsicon} alt="Category Icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;