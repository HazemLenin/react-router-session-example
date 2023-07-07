import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	return (
		<>
			<h1>Something wrong happened!</h1>
			<i>{error.statusText || error.message}</i>
		</>
	);
}

export default ErrorPage;
