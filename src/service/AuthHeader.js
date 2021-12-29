export default function AuthHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.jwt) {
    return {
      Authorization: "Bearer " + user.jwt,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    };
  }
  return {};
}
