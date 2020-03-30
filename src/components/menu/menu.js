import React from 'react';
import styles from './menu.module.css';
import { PickerColor } from '../pickerColor/pickerColor';

export const Menu = ({ elements, categorieSelected, statesColors }) => {

    return (
        <div className={styles.menuContainer}>
            {categorieSelected}
            {
                statesColors.map(
                    (stateColor, index) => {
                        return (<div key={index}>
                            <PickerColor stateColor={stateColor}></PickerColor>
                        </div>)
                    }
                )
            }

        </div>
    );
};
