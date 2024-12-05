import styles from './BreadCrumbs.module.css';

const BreadCrumbs = () => {
    return (
        <nav className={styles.breadCrumbs} aria-label="Хлебные крошки">
            <a href="#" className={styles.text}>Главная</a>
            <span className={styles.text}>/</span>
            <span className={styles.text}>Новости и статьи</span>
        </nav>
    );
};

export default BreadCrumbs;

