export const prerender = false;

export const actions = {
  signup: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    return { success: true, message: "Signup success" };
  },
};
