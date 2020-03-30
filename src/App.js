import React, { useState } from 'react';
import styles from './App.module.css';
import { Menu } from './components/menu/menu';
import { default_assets, categories, } from './data';

function App() {

	const [statesColors, setStatesColors] = useState([]);
	const [assets, setAssets] = useState(default_assets);
	// const [categorieSelected, setCategorieSelected] = useState('');
	const [displayMenu, setDisplayMenu] = useState(false);

	const elements = categories.map((categorie) => {
		return categorie.name;
	});

	const initGraphicConfig = (...statesColors) => {
		setDisplayMenu(true)
		setStatesColors(statesColors)
	}
	
	return (
		<main className={styles.App}>
			<section className={styles.mainContainer}>
				{
					displayMenu &&
					<section className={styles.graphicContainer}>
						<Menu
							elements={elements}
							statesColors={statesColors}
						/>
					</section>
				}
				<svg height="80vh" className={styles.svgContainer}>
					{
						categories.map((categorie, index) => {
							const AssetComponent = assets[categorie.layer]

							return (
								AssetComponent && <AssetComponent
									key={index}
									onClick={initGraphicConfig}
								/>
							);
						})
					}
				</svg>
			</section>
		</main>
	);
}

export default App;
