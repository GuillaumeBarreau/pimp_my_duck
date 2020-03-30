import React, { useState } from "react";

export const ShapeEyeDefault = ({ primaryColor, secondaryColor, onClick }) => {

    const [statePrimaryColor, setStatePrimaryColor] = useState(primaryColor);
    const [stateSecondaryColor, setStateSecondaryColor] = useState(secondaryColor);

    return (
        <svg onClick={() => onClick(
            { statePrimaryColor, setStatePrimaryColor },
            { stateSecondaryColor, setStateSecondaryColor }
        )} strokeMiterlimit="2" viewBox="0 0 2000 2000">
            <path
                fill={stateSecondaryColor}
                d="M926.061 771.203c0 70.036-31.314 126.825-69.94 126.825s-69.945-56.789-69.945-126.825c0-70.045 31.319-126.826 69.945-126.826 38.626 0 69.94 56.78 69.94 126.826m328.876 8.86c0 70.041-31.314 126.821-69.94 126.821-38.627 0-69.941-56.78-69.941-126.82 0-70.042 31.314-126.822 69.94-126.822 38.627 0 69.941 56.78 69.941 126.821"
            ></path>
            <path
                fill={statePrimaryColor}
                d="M1226.834 825c0 45.223-18.733 81.884-41.84 81.884-23.106 0-41.835-36.661-41.835-81.884 0-45.227 18.729-81.888 41.835-81.888 23.107 0 41.84 36.661 41.84 81.888m-328.874-8.865c0 45.227-18.733 81.888-41.84 81.888-23.106 0-41.839-36.66-41.839-81.888 0-45.223 18.733-81.883 41.84-81.883 23.106 0 41.84 36.66 41.84 81.883"
            ></path>
            <path
                fill={stateSecondaryColor}
                d="M889.084 746.755c0 6.907-5.404 12.507-12.066 12.507-6.667 0-12.067-5.6-12.067-12.507 0-6.908 5.4-12.503 12.067-12.503 6.662 0 12.066 5.595 12.066 12.503m328.877 8.863c0 6.907-5.4 12.503-12.066 12.503-6.667 0-12.067-5.596-12.067-12.503 0-6.904 5.4-12.503 12.067-12.503 6.666 0 12.066 5.6 12.066 12.503"
            ></path>
        </svg>
    );
}

ShapeEyeDefault.defaultProps = {
    primaryColor: "#1d1d1b",
    secondaryColor: "#fff"
}
