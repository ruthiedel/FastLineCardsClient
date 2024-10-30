import React from 'react'
import styles from './SearchLine.module.css'


function SearchLine({ search }) {
    return (
      <div className={styles.searchcontainer}>
        <input
        className={styles.searchinput}
          type="text"
          placeholder="Search..."
          onChange={(event) => search(event.target.value)}
        />
      </div>
    );
  }

export default SearchLine