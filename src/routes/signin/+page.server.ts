export const prerender = false;

export const actions = {
  signin: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await fetch("http://127.0.0.1:5000/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        error: error,
      };
    }

    const data = await response.json();
    return {
      success: true,
      message: data,
    };
  },
};
