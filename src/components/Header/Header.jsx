import styles from './Header.module.css';

import { ReactComponent as Dzen } from '../../assets/svg/dzen.svg';
import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg';
import { ReactComponent as YouTube } from '../../assets/svg/youtube.svg';
import { ReactComponent as Vk } from '../../assets/svg/vk.svg';
import { ReactComponent as Favourites } from '../../assets/svg/favourites.svg';
import { ReactComponent as Basket } from '../../assets/svg/basket.svg';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Burger } from '../../assets/svg/burger.svg';
import { ReactComponent as Account } from '../../assets/svg/account.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className={styles.links}>
                    <Telegram className={styles.linkIcon} aria-label="Телеграм"/>
                    <Dzen className={styles.linkIcon} aria-label="Дзен"/>
                    <YouTube className={styles.linkIcon} aria-label="Ютьюб"/>
                    <Vk className={styles.linkIcon} aria-label="Вконтакте"/>
                </div>
                <div className={styles.userControls}>
                    <div className={styles.seconderyNav}>
                        <nav className={styles.controls}>Форум</nav>
                        <nav className={styles.controls}>Поиск</nav>
                        <nav className={styles.controls}>Контакты</nav>
                    </div>
                    <div className={styles.userActions}>
                        <Favourites className={styles.userIcon} />
                        <Basket className={styles.userIcon}/>
                        <Account className={styles.userIconAccount} />
                        <button className={styles.toAccount} type="button" aria-label="Личный кабинет">Личный кабинет</button>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <Logo className={styles.logo}/>
                <div className={styles.nav}>
                    <nav className={styles.navItem}>ElcoreStore</nav>
                    <nav className={styles.navItem}>ElcoreCloud</nav>
                    <nav className={styles.navItem}>ElcoreIDE</nav>
                    <nav className={styles.navItem}>Обучение и ресурсы</nav>
                    <nav className={styles.navItem}>Новости и статьи</nav>
                </div>
                <Burger className={styles.burger} />
            </div>
        </header>
    );
};

export default Header;
