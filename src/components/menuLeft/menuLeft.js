import React from 'react';
import styles from './menuLeft.module.css';

export const MenuLeft = ({ elements, onClick }) => {

    return (
        <div className={styles.menuLeftContainer}>
            <ul>
                {
                    elements.map((element, index) => {
                        return (
                            <li
                                key={index}
                                onClick={(e) => onClick(e, element)}
                            >
                                <span>
                                    <p className={styles.menuLeftItemIcon}>img</p>
                                    <p className={styles.menuLeftItemTitle}>{element}</p>
                                </span>
                            </li>)
                    })
                }
            </ul>
        </div>
    );
};
