import React from "react";
import { Link, Outlet } from "react-router-dom";

function LayoutPage() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<Link to="/privacy">Privacy</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default LayoutPage;
