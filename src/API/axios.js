import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  // baseURL:"https://evangadi-forum-backend-2-77uy.onrender.com"
});

export default axiosInstance;
