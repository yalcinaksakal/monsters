import styles from "./Cards.module.css";

const Card = ({ monster }) => (
  <div className={styles.card}>
    <img
      alt="monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=150x150`}
    />
    <p>{monster.name}</p>
    <p>{monster.email.toLowerCase()}</p>
  </div>
);
export default Card;
