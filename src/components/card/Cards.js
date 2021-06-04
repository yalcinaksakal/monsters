import Card from "./Card";
import styles from "./Cards.module.css";

const Cards = ({ monsters }) => (
  <div className={styles.cards}>
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
export default Cards;
