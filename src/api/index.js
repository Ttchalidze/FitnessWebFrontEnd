import axios from "axios";
export const API = "http://localhost:3000";
const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
export default axiosClient;
