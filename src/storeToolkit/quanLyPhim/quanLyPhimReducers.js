import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhimServices";
//import axios from "axios";

const initialState = {
  movieList: [],
  movieDetail: undefined,
  isFetching: false,
  isFetchingDetails: false,
  error: undefined,
};

export const { reducer: quanLyPhimReducers, actions: quanLyPhimActions } =
  createSlice({
    name: "quanLyPhim",
    initialState,
    //xử lý những actions đồng bộ => không sử dụng để xử lý các actions được tạo từ createAsyncThunk
    reducers: {
      // getMovieList: (state, action) =>{
      //     state.movieList = action.payload
      // },
      // getMovieDetail: (state, action) => {
      //     state.movieDetail = action.payload
      // },
    },

    //xử lý những actions bất đồng bộ (call api)
    extraReducers: (builder) => {
      builder
        //getMovieList
        .addCase(getMovieList.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getMovieList.fulfilled, (state, action) => {
          state.movieList = action.payload;
          state.isFetching = false;
        })
        .addCase(getMovieList.rejected, (state, action) => {
          state.error = action.payload;
          state.isFetching = false;
        })
        //getMovieDetail
        .addCase(getMovieDetail.pending, (state, action) => {
          state.isFetchingDetails = true;
        })
        .addCase(getMovieDetail.fulfilled, (state, action) => {
          state.movieDetail = action.payload;
          state.isFetchingDetails = false;
        })
        .addCase(getMovieDetail.rejected, (state, action) => {
          state.error = action.payload;
          state.isFetchingDetails = false;
        });
    },
  });

export const getMovieList = createAsyncThunk(
  "quanLyPhim/getMovieList",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyPhimServices.getMovieList();
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMovieDetail = createAsyncThunk(
  "quanLyPhim/getMovieDetail",
  async (movieIds, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyPhimServices.getMovieDetail(movieIds);
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
