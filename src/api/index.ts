import axios from "axios";

export const instAPI = axios.create({
  baseURL: "api.coincap.io/v2",
  headers: {
    "Content-Type": "application/json;"
  }
});

// charset=utf-8
