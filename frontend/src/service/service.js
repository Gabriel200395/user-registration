import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3004/",
});

export default service;
