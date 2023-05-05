import Api from "./axios";

// const URL = process.env.REACT_APP_ADMIN_URL;

export function apiGetUsers() {
  return Api().get(`/api/v1/leaders`);
}
