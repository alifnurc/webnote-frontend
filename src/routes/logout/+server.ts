import { redirect } from "@sveltejs/kit";

export const POST = async ({ cookies }) => {
  cookies.delete("jwt", { path: "/" });
  throw redirect(303, "/signin");
};
