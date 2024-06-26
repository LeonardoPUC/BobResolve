/* eslint-disable */
import { api } from "./useQuery";

export const logout = () => {
  localStorage.removeItem("");
  localStorage.removeItem("user");
  localStorage.removeItem("refreshToken");
  sessionStorage.removeItem("regulatoryRequest");
  if (window.location.pathname !== "/login") {
    window.location.href = "";
    window.location.pathname = "/login";
  }
};
