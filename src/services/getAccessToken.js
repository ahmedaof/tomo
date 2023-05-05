import axios from "axios";

const URL = process.env.REACT_APP_ADMIN_URL;

const getAccessToken = async (email, password) => {
  try {
    return axios
      .post(`${URL}/api/v1/coaches/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.data.token) {
          localStorage.setItem(
            "user_token",
            JSON.stringify(response.data.data.token)
          );
          sessionStorage.setItem("coach", JSON.stringify(response.data.data));
        }
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export { getAccessToken };
