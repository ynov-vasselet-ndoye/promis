"use client";

import React from "react";

export default function Page() {
	return (
		<main className="content-page">
			<h1>Les luminaires que nous vous proposons</h1>
			<div className='products'>
				<div className='product-item'>
					<div className='thumbnail'></div>
					<div className='content'>
						<div className='title'>Octogone</div>
						<div className='desc'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
							pellentesque placerat mauris a dignissim...
						</div>
						<div className='price'>59.99€</div>
						<div className='ctas'>
							<button className='add-to-cart'>Acheter</button>
							<button className='add-to-cart'>Ajouter au panier</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
