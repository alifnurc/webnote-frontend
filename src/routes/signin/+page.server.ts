import { fail, redirect } from "@sveltejs/kit";

export const prerender = false;

export const actions = {
  signin: async ({ request, cookies }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await fetch("http://127.0.0.1:5000/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      return fail(400, { error: await response.text() });
    }

    const jsonObj = await response.json();
    cookies.set("jwt", JSON.stringify(jsonObj), {
      path: "/",
      sameSite: "strict",
    });

    throw redirect(303, "/dashboard");
  },
};
