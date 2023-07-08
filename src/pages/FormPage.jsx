import React from "react";
import { Form } from "react-router-dom";

function FormPage() {
	return (
		<div>
			<Form method="post">
				<label htmlFor="title">title</label>
				<input type="text" name="title" />
				<button type="submit">Submit</button>
			</Form>
		</div>
	);
}

export default FormPage;
