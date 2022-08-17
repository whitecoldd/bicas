import axios from "axios";

const BASE_URL = "http://localhost:9000/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: process.env.PUBLIC_URL ,
});

export const userRequest = axios.create({
  baseURL: process.env.PUBLIC_URL ,
  header: { token: `Bearer ${TOKEN}` },
});