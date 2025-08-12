import axios from "axios";

const usersInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default usersInstance;
