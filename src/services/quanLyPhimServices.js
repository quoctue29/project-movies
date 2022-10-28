import { api } from "../constans/api";

export const quanLyPhimServices = {
  getMovieList: () => {
    return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP13");
  },
  getMovieDetail: (movieIds) => {
    return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieIds}`);
  },
};
