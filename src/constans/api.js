import axios from "axios";

const TokenCyberSoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMS8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2Nzg0OTI4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3ODY0MDQwMH0.nNcGn0C4SvUfrKPkxYBi5rhhLNuGbmfuND5eXehhzPQ";
const baseURL = "http://movienew.cybersoft.edu.vn/";

export const api = axios.create();

api.interceptors.request.use((config) => {
  config = {
    ...config,
    headers: {
      TokenCyberSoft,
    },
    baseURL,
  };
  return config;
});
