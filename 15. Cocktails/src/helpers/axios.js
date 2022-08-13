import axios from "axios";

export const base = axios.create({
  baseURL: "https://www.thecocktaildb.com",
  headers: {
    Accept: "application/json",
  },
});
