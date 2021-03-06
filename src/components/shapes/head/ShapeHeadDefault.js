import React, { useState } from 'react';

import { lightenDarkenColor } from '../../../logic/lightenDarkenColor';

export const ShapeHeadDefault = ({ primaryColor, onClick }) => {

	const [statePrimaryColor, setStatePrimaryColor] = useState(primaryColor);

	return (
		<svg onClick={() => onClick(
			{ statePrimaryColor, setStatePrimaryColor }
		)} viewBox="0 0 2000 2000">
			<path
				d="M1015.452 383.93c218.577-.415 300.078 80.704 341.866 188.001 41.783 107.298 78.808 258.514 85.628 309.362 7.371 54.996 14.747 130.006-41.788 185.343-56.53 55.338-228.593 191.834-384.68 188.144-156.078-3.686-331.825-138.956-366.24-179.534-34.408-40.582-81.113-100.84-51.618-211.51 0 0 72.146-261.708 104.103-305.98 31.95-44.267 94.156-173.417 312.729-173.827"
				fill={lightenDarkenColor(statePrimaryColor, -50)}
			></path>
			<path
				d="M1018.613 317.338c238.643-.43 327.634 84.24 373.256 196.235 45.621 111.994 86.045 269.835 93.486 322.907 8.053 57.404 16.106 135.701-45.621 193.458-61.724 57.761-249.585 200.237-420.001 196.385-170.408-3.848-362.29-145.042-399.861-187.397-37.573-42.36-88.562-105.252-56.357-220.774 0 0 78.768-273.168 113.654-319.376 34.886-46.208 102.801-181.012 341.444-181.438"
				fill={statePrimaryColor}
			></path>
		</svg>
	);
};

ShapeHeadDefault.defaultProps = {
	primaryColor: "#c62828"
}