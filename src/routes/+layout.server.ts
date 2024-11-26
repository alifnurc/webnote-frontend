export function load({ cookies }) {
  const user = cookies.get("jwt");

  if (user) {
    return {
      loggedIn: true,
    };
  }

  return {
    loggedIn: false,
  };
}
