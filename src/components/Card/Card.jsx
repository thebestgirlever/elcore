import styles from './Card.module.css';

const Card = ({ item }) => {
    return (
        <article className={styles.card}>
            <img
                src={require('../../assets/images/image.png')}
                alt={item.title}
                className={styles.image}
            />
            <div className={styles.category}>
                {item.isNews ? `${item.date} / ${item.category}` : item.category}
            </div>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.text}>{item.text}</p>
        </article>
    );
};

export default Card;
