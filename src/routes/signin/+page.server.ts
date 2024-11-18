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

    if (response.ok) {
      const jsonObj = await response.json();
      cookies.set("jwt", jsonObj.token, {
        path: "/",
        sameSite: "strict",
      });

      throw redirect(303, "/dashboard");
    }

    return fail(400, { error: "Invalid username or password" });
  },
};
