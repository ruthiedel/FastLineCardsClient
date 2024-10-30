import React, { useState } from 'react';
import styles from "./Card.module.css";
import ColorBar from "../ColorBar/ColorBar.jsx";
import Colors from "../../lib/Colors.js";

function Card({ card, deleteCard, updateCard }) {
  const [isColorBarOpen, setIsColorBarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(card.text);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleBlur = () => {
    setIsEditing(false);
    updateCard(card.id, { text });
  };
  const handleColorChange = (color) => {
    updateCard(card.id, { backgroundColor: color });
    setIsColorBarOpen(false);
  };

  return (
    <div className={styles.card} style={{ backgroundColor: Colors[card.backgroundColor] }}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur}
          autoFocus
          className={styles.input}
        />
      ) : (
        <span
          onMouseEnter={() => setIsEditing(true)}
        >
          {text}
        </span>
      )}
      {!isColorBarOpen ? (
        <div className={styles.circle} onClick={() => setIsColorBarOpen(!isColorBarOpen)}></div>
      ) : (
        <ColorBar handleColorChange={handleColorChange} />
      )}
      <button onClick={() => deleteCard(card.id)} className={styles.trashIcon}>
        🗑️
      </button>
    </div>
  );
}

export default Card;
