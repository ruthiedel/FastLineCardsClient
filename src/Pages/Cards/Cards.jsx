import React from 'react';
import styles from './Cards.module.css';
import { getCards as getCardsApi, updateCard as updateCardApi, deleteCard as deleteCardApi, createCard } from '../../services/cards';
import Card from '../../component/Card/Card.jsx';



function Cards() {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        const getCards = async () => {
            try {
                const response = await getCardsApi();
                setCards(response.data);
            } catch (error) {
                alert(error);
            }
        };
        getCards();
    }, []);

    const updateCard = async (id, updatedCard) => {
        try {
            let upcard = await updateCardApi(id, updatedCard);
            const updatedCards = [...cards];
            updatedCards[cards.findIndex(c => c.id === id)] = upcard.data;
            setCards(updatedCards);
        } catch (error) {
            alert(error);
        }
    };

    const deleteCard = async (id) => {
        try {
            await deleteCardApi(id);
            const updatedCards = cards.filter(card => card.id !== id);
            setCards(updatedCards);
        } catch (error) {
            alert(error);
        }
    };

    const addCard = async () => {
        let newCard = {
            text: "New Card",
            backgroundColor: "white",
        };
        try {
            const createdCard = await createCard(newCard);
            setCards([...cards, createdCard.data]);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className={styles.container}>
            {cards.map(card => (
                <Card key={card.id} card={card} updateCard={updateCard} deleteCard={deleteCard} />
            ))}
            <button className={styles.addButton} onClick={addCard}>+</button>
        </div>
    );
}

export default Cards;
