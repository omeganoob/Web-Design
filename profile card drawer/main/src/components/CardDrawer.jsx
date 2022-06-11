import { useState } from 'react'
import styles from './CardDrawer.module.css';

function CardDrawer() {
  const [classToggle, setClassToggle] = useState('');

  const expandCard = () => {
    if(classToggle === styles.active) {
      setClassToggle("");
    } else {
      setClassToggle(styles.active);
    }
  }

  return (
    <div className={`${styles.card} ${classToggle}`}>
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <h2>Chung Nguyen
            <br/>
            <span>
            Main Daxua
          </span></h2>
          <div className={styles.imageBox}>
            <img src="https://i.kym-cdn.com/entries/icons/mobile/000/028/526/honklhonk.jpg" alt="avatar"/>
          </div>
          <button>Hire Me</button>
        </div>
      </div>
      <div onClick={() => expandCard()} className={`${styles.toggle} ${classToggle}`}>
        <span>
        </span>
      </div>
    </div>
  )
}

export default CardDrawer
