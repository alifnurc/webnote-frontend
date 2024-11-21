import { fail, redirect } from "@sveltejs/kit";

export const prerender = false;

export async function load({ cookies }) {
  const data = cookies.get("jwt");

  if (!data) {
    throw redirect(303, "/signin");
  }

  const user = JSON.parse(data);

  const params = new URLSearchParams({
    page_size: "10",
    current_page: "1",
  });

  const response = await fetch(`http://127.0.0.1:5000/listnotes?${params}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + user.access_token,
    },
  });

  if (!response.ok) {
    return fail(400, { error: await response.text() });
  }

  const notes = await response.json();
  return {
    user: user.username,
    notes: notes.notes,
  };
}

export const actions = {
  logout: async ({ cookies }) => {
    cookies.delete("jwt", { path: "/" });
    throw redirect(303, "/signin");
  },
};
