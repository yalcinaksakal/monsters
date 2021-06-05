import Card from "./Card";
import styles from "./Cards.module.css";

const Cards = ({ monsters }) => (
  <div className={styles.cards}>
    {monsters.length ? (
      monsters.map(monster => <Card key={monster.id} monster={monster} />)
    ) : (
      <p>Not found</p>
    )}
  </div>
);
export default Cards;
