import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function ProductsPage() {
	const products = useLoaderData();
	return (
		<>
			<h1>Products</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<Link to={`/products/${product.id}`}>{product.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default ProductsPage;
