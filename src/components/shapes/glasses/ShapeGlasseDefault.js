import React, { useState } from 'react';

import { lightenDarkenColor } from '../../../logic/lightenDarkenColor';

export const ShapeGlasseDefault = ({ primaryColor, onClick }) => {

    const [statePrimaryColor, setStatePrimaryColor] = useState(primaryColor);

    return (
        <svg onClick={() => onClick(
            { statePrimaryColor, setStatePrimaryColor }
        )} viewBox="0 0 2000 2000" fillRule="evenodd" clipRule="evenodd" strokeMiterlimit="10">
            <path d="M970.748 771.797s4.342-32.292 43.967-32.292 46.141 30.517 46.141 30.517" fill="none" stroke={statePrimaryColor} strokeWidth="8.33333"></path>
            <path d="M1364.908 749.628c.083-13.133-2.65-23.833-33.733-40.258-47.884-25.3-181.717-38.083-239.384-17.408-31.425 11.266-44.4 20.383-43.525 62.016 1.084 52.459 113.159 205.659 186.067 191.509 72.9-14.142 129.908-89.509 130.575-195.859M667.228 749.628c-.092-13.133 2.642-23.833 33.725-40.258 47.883-25.3 181.725-38.083 239.383-17.408 31.425 11.266 44.4 20.383 43.525 62.016-1.083 52.459-113.158 205.659-186.066 191.509-72.9-14.142-129.909-89.509-130.567-195.859" fill={statePrimaryColor} fillRule="nonzero"></path>
            <g transform="matrix(1,0,0,1,-551.932,-850.005) matrix(8.33333,0,0,8.33333,0,0)">
                <clipPath id="glasses-3_svg__a">
                    <path d="M150.346 187.125c-3.73 1.971-4.058 3.255-4.047 4.831.079 12.762 6.92 21.806 15.668 23.503 8.749 1.698 22.198-16.686 22.328-22.981.104-4.996-1.453-6.09-5.223-7.443-2.398-.86-5.892-1.237-9.676-1.237-7.135 0-15.295 1.343-19.05 3.327z" clipRule="nonzero"></path>
                </clipPath>
                <g clipPath="url(#glasses-3_svg__a)">
                    <path fill={lightenDarkenColor(statePrimaryColor, -70)} d="M177.716 183.148l-4.257-3.24-23.38 30.729 4.257 3.239zM181.746 184.692l-1.424-1.082-23.368 30.736 1.423 1.083z"></path>
                </g>
            </g>
            <g transform="matrix(1,0,0,1,-551.932,-850.005) matrix(8.33333,0,0,8.33333,0,0)">
                <clipPath id="glasses-3_svg__b">
                    <path d="M197.247 185.035c-3.77 1.353-5.327 2.447-5.223 7.443.13 6.295 13.579 24.679 22.328 22.981 8.748-1.697 15.589-10.741 15.669-23.503.01-1.576-.318-2.86-4.047-4.831-3.756-1.984-11.916-3.327-19.052-3.327-3.783 0-7.278.377-9.675 1.237z" clipRule="nonzero"></path>
                </clipPath>
                <g clipPath="url(#glasses-3_svg__b)">
                    <path fill={lightenDarkenColor(statePrimaryColor, -70)} d="M223.829 183.986l-4.258-3.24-23.38 30.729 4.258 3.24zM227.858 185.53l-1.424-1.082-23.368 30.736 1.423 1.083z"></path>
                </g>
            </g>
        </svg>

    );
};

ShapeGlasseDefault.defaultProps = {
    primaryColor: "#161826"
}