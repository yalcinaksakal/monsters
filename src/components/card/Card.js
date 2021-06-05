import styles from "./Cards.module.css";

const Card = ({ monster }) => (
  <div className={styles.card}>
    <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
    <p>{monster.name}</p>
    <p className={styles.email}>{monster.email.toLowerCase()}</p>
  </div>
);
export default Card;
