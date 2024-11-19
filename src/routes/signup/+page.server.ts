import { fail } from "@sveltejs/kit";

export const prerender = false;

export const actions = {
  signup: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    const form = new FormData();
    form.append("username", username);
    form.append("password", password);

    const response = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      body: form,
    });

    if (!response.ok) {
      return fail(400, { error: await response.text() });
    }

    return { success: true };
  },
};
