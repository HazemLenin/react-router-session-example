import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	LayoutPage,
	ErrorPage,
	HomePage,
	ProductsPage,
	ProductPage,
	PrivacyPage,
	FormPage,
} from "./pages";
import { loadProducts, loadProduct } from "./loaders";
import { formAction } from "./actions";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/products",
				element: <ProductsPage />,
				loader: loadProducts,
			},
			{
				path: "/products/:id",
				element: <ProductPage />,
				loader: loadProduct,
			},
			{
				path: "/form",
				element: <FormPage />,
				action: formAction,
			},
		],
	},
	{
		path: "/privacy",
		element: <PrivacyPage />,
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
