const userData = JSON.parse(localStorage.getItem("userData") || "{}");
const userToken = JSON.parse(localStorage.getItem("userToken") || "{}");
export default {
  user: userData,
  token: userToken,
};
