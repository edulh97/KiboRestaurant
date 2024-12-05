// Nigiri2.tsx

import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';
import Header from "../../components/header/Header";
import NigiriBase from "../../components/nigiri-model/NigiriBase";

function Nigiri2() {
    const navigate = useNavigate();
    const [disliked3] = useState(() => JSON.parse(localStorage.getItem('nigiri3Disliked') || 'false'));
    const [disliked4] = useState(() => JSON.parse(localStorage.getItem('nigiri4Disliked') || 'false'));
    const [disliked5] = useState(() => JSON.parse(localStorage.getItem('nigiri5Disliked') || 'false'));
    const handlers = useSwipeable({
        onSwipedUp: () => {
            if (!disliked3) {
                navigate('/Nigiri3');
            } else if (!disliked4) {
                navigate('/Nigiri4'); 
            } else if (!disliked5) {
                navigate('/Nigiri5');
            }
        },
        onSwipedDown: () => navigate('/Nigiri1'),
        onSwipedRight: () => navigate('/Main-Menu'),
        trackMouse: true,
    });

    return (
        <div {...handlers}>
            <Header />
            <NigiriBase
                id="nigiri2"
                name="Shrimp Nigiri"
                price={3.50}
                image="/nigiri2shrimp.png"
                description="1 unit per serving"
                ingredients="Mucho arroz y poco pescado"
                allergens="Seafood"
            />
        </div>
    );
}

export default Nigiri2;