import axios from "axios";

export default function Api() {
  const accessToken = localStorage.getItem("user_token");
  const parseAccessToken = accessToken ? JSON.parse(accessToken) : null;
  const appClient = axios.create({
    baseURL: process.env.REACT_APP_ADMIN_URL,
    headers: {
      Authorization: `Bearer ${parseAccessToken}`,
      Accept: "application/json",
      ContentType: "application/json",
      // "Accept-Language": "en",
      // "Content-Language": "en",
    },
  });
  appClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      
      return Promise.reject(error.response);
    }
  );

  return appClient;
}
