const products = [
	{
		id: 1,
		name: "phone",
		rate: 3.4,
		price: 300,
	},
	{
		id: 2,
		name: "moon lamp",
		rate: 5,
		price: 200,
	},
	{
		id: 3,
		name: "table",
		rate: 3,
		price: 100,
	},
];

export function loadProducts() {
	return products;
}

export function loadProduct({ params }) {
	return products.find((p) => p.id == params.id) || null;
}
