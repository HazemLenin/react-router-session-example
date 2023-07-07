import React from "react";
import { useLoaderData } from "react-router-dom";

function ProductPage() {
	const product = useLoaderData();
	return (
		<>
			<h1>Product</h1>
			<h2>name: {product.name}</h2>
			<h2>rate: {product.rate}</h2>
			<h2>price: {product.price}</h2>
		</>
	);
}

export default ProductPage;
