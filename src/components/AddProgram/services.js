import Api from "../../services/axios";

// const URL = process.env.REACT_APP_ADMIN_URL;

export function apiAddProgram(data) {
  return Api().post(`/api/v1/programs`, data);
}

export function apiAddProgramMeals(data) {
  return Api().post(`/api/v1/main-meals`, data);
}

export function apiUploadImg(file) {
  return Api().post(`/api/v1/upload/image`, file);
}
