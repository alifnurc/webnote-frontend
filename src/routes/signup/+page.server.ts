export const prerender = false;

export const actions = {
  signup: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const form = new FormData();
      form.append("username", username);
      form.append("password", password);

      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        const error = await response.text();
        return { error: error };
      }

      const data = await response.text();
      return { success: true, data };
    } catch (error) {
      console.error("Error:", error);
    }
  },
};
