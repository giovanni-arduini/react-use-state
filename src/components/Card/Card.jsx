import style from "./Card.module.css";

function Card({ title, description }) {
  return (
    <div className={style.card}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
    </div>
  );
}

export default Card;
