import React, { useState, useEffect } from 'react';
import { BlockPicker as Picker } from 'react-color';
import styles from './pickerColor.module.css';

export const PickerColor = ({ stateColor }) => {

	const [colorPicker, setColorPicker] = useState();

	const colors = ['#f2f2f2', '#1d1d1b', '#D9E3F0', '#ff5700', '#ffdf00', '#ffd000', '#f8b133', '#8eff00', '#00ff56', '#00fff0', '#0073ff','#4500ff', '#9d00ff', '#ff0091', '#C62828'];

	useEffect(() => {
		setColorPicker(Object.values(stateColor)[0]);	
	}, [stateColor])
	
	const handleChangeColor = (color) => {
		setColorPicker(color.hex);	
		stateColor[Object.keys(stateColor)[1]](color.hex);
	}
	
	return (
		<div className={styles.pickerColorContainer}>
			<Picker color={colorPicker} colors={colors} onChange={handleChangeColor} />
		</div>
	);
};
