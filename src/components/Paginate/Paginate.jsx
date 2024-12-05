import React from 'react';
import styles from './Paginate.module.css';

const Paginate = ({ pageCount, currentPage, onPageChange }) => {
    const handlePageClick = (page) => {
        onPageChange({ selected: page });
    };

    const pageNumbers = [];

    if (pageCount <= 5) {
        for (let i = 0; i < pageCount; i++) {
            pageNumbers.push(i);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(pageCount - 1);
    }

    return (
        <div className={styles.paginateContainer}>
            <div
                className={`${styles.paginateItem} ${currentPage === 0 ? styles.paginateItemDisabled : ''}`}
                onClick={() => currentPage > 0 && handlePageClick(currentPage - 1)}
            >
                &lt;
            </div>

            {pageNumbers.map((page, index) => (
                page === '...' ? (
                    <div key={index} className={styles.paginateItem}>
                        ...
                    </div>
                ) : (
                    <div
                        key={page}
                        className={`${styles.paginateItem} ${currentPage === page ? styles.paginateItemActive : ''}`}
                        onClick={() => handlePageClick(page)}
                    >
                        {page + 1}
                    </div>
                )
            ))}

            <div
                className={`${styles.paginateItem} ${currentPage === pageCount - 1 ? styles.paginateItemDisabled : ''}`}
                onClick={() => currentPage < pageCount - 1 && handlePageClick(currentPage + 1)}
            >
                &gt;
            </div>
        </div>
    );
};

export default Paginate;
