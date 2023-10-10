import axios from "axios";

const BASE_URL = "http://localhost:8888/";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
