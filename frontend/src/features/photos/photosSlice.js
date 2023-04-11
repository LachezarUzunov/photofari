import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photosService from "./photosService";

const initialState = {
  photos: [],
  photo: {},
  isPhotoSuccess: false,
  isPhotoError: false,
  isPhotoLoading: false,
  photoMessage: "",
};

// Upload new Photo
export const uploadPhoto = createAsyncThunk(
  "photo/upload",
  async (photo, thunkAPI) => {
    console.log(photo);
    try {
      const token = thunkAPI.getState().auth.user.token;
      // console.log(photo);
      return await photosService.publishPhoto(photo, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const photosSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    reset: (state) => {
      state.isPhotoLoading = false;
      state.isPhotoError = false;
      state.isPhotoSuccess = false;
      state.photoMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadPhoto.pending, (state) => {
        state.isPhotoLoading = true;
      })
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.isPhotoLoading = false;
        state.isPhotoSuccess = true;
        state.photo = action.payload;
      })
      .addCase(uploadPhoto.rejected, (state, action) => {
        state.isPhotoLoading = false;
        state.isPhotoError = true;
        state.photoMessage = action.payload;
      });
  },
});

export const { reset } = photosSlice.actions;
export default photosSlice.reducer;
