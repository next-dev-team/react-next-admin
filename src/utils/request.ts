import axios from "axios";

const API_TOKEN =
  "4fda90e3c06a7ab8df7bc358bad9b75978fa0c83e447b0d390c2b9e1a28d7950";
export const axiosInstance = axios.create({
  baseURL: "https://gorest.co.in/public/v1",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
