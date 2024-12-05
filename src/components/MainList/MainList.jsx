import Card from '../Card/Card';
import Paginate from '../Paginate/Paginate'; 
import styles from './MainList.module.css';
import data from '../../data.json';
import { useState } from 'react';

const MainList = () => {
    const [dataList] = useState(() => data.dataList);
    const itemsPerPage = 9;

    const [currentItems, setCurrentItems] = useState(dataList.slice(0, itemsPerPage));
    const [pageCount] = useState(Math.ceil(dataList.length / itemsPerPage));
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        const newCurrentItems = dataList.slice(newOffset, newOffset + itemsPerPage);
        setCurrentItems(newCurrentItems);
        setCurrentPage(event.selected);
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Новости и статьи</h1>
            <div className={styles.tags}>
                <div className={styles.activeTag}>Все новости и статьи</div>
                <div className={styles.tag}>Новости</div>
                <div className={styles.tag}>Статьи</div>
            </div>
            <div className={styles.newsBlock}>
                {currentItems.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            <Paginate
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={handlePageClick}
            />
        </div>
    );
};

export default MainList;