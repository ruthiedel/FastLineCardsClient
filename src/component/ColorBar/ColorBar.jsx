import React from 'react'
import styles from './ColorBar.module.css'
import Colors from '../../lib/Colors'


function ColorBar({cardid, updateCard,setIsColorBarOpen}) {

    const handleColorChange = async (color) => {
        await updateCard(cardid, { backgroundColor: color });
        setIsColorBarOpen(false);
    };
    return (
        <div className={styles.container}>

            {Object.keys(Colors).map((key) => (
                <div
                    onClick={()=>handleColorChange(key)}
                    key={key}
                    className={styles.circle}
                    style={{ backgroundColor: Colors[key] }}
                ></div>
            ))}
        </div>
    )
}

export default ColorBar