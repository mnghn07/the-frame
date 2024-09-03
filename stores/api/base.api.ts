import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://api.example.com"
});

export default baseApi;
