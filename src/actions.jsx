import { redirect } from "react-router-dom";

export async function formAction({ request }) {
	const data = await request.formData();
	alert(data.get("title"));
	return redirect("/");
}
