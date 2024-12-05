import styles from './Footer.module.css';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as DownloadToDesk } from '../../assets/svg/downloadToDesk.svg';
import { ReactComponent as Dzen } from '../../assets/svg/dzen.svg';
import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg';
import { ReactComponent as YouTube } from '../../assets/svg/youtube.svg';
import { ReactComponent as Vk } from '../../assets/svg/vk.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.aboutUs}>
                    <Logo className={styles.logo} aria-label="logo" />
                    <div className={styles.aboutUs_title}>Платформа для автоматизации<br />ваших процессов</div>
                    <a href="#" className={styles.downloadToDesk} ><DownloadToDesk role="img" /></a>
                    <div className={styles.name}>© ООО «НПО «Фарватер» 2024</div>
                </div>
                <div className={styles.nav}>
                    <div className={styles.platform}>
                        <div className={styles.nav_title}>Платформа</div>
                        <ul className={styles.nav_block}>
                            <li><a href="#" className={styles.nav_text}>ElcoreStore</a></li>
                            <li><a href="#" className={styles.nav_text}>ElcoreCloud</a></li>
                            <li><a href="#" className={styles.nav_text}>ElcoreIDE</a></li>
                        </ul>
                    </div>
                    <div className={styles.resources}>
                        <div className={styles.nav_title}>Обучение и ресурсы</div>
                        <ul className={styles.nav_block}>
                            <li ><a href="#" className={styles.nav_text}>Что такое ElcorePLC</a></li>
                            <li ><a href="#" className={styles.nav_text}>Документация</a></li>
                            <li ><a href="#" className={styles.nav_text}>Обучающие материалы</a></li>
                            <li ><a href="#" className={styles.nav_text}>Примеры использования</a></li>
                            <li ><a href="#" className={styles.nav_text}>База знаний</a></li>
                        </ul>
                    </div >
                    <div className={styles.account}>
                        <button className={styles.toAccount} type="button" aria-label="Личный кабинет">Личный кабинет</button>
                        <ul className={styles.nav_block}>
                            <li><a href="#" className={styles.nav_text}>Контакты</a></li>
                            <li><a href="#" className={styles.nav_text}>Новости и статьи</a></li>
                            <li><a href="#" className={styles.nav_text}>Сообщество (Форум)</a></li>
                            <li><a href="#" className={styles.nav_text}>Тех поддержка</a></li>
                        </ul>
                    </div>
                </div >
            </div >
            <div className={styles.bottom}>
                <div className={styles.links}>
                    <Telegram className={styles.linkIcon} aria-label="Telegram" />
                    <Dzen className={styles.linkIcon} aria-label="Dzen" />
                    <YouTube className={styles.linkIcon} aria-label="YouTube" />
                    <Vk className={styles.linkIcon} aria-label="Vkontakte" />
                </div>
                <div className={styles.siteInfo}>
                    <a href="#" className={styles.siteInfo_text}>Политика конфиденциальности</a>
                    <a href="#" className={styles.siteInfo_text}>Карта сайта</a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
