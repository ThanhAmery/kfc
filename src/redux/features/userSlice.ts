import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";


// khai báo default value của state
const initialState: null | User = null;

const userSlice = createSlice({
    name: 'user',
    initialState, // cách viết tắt:  => initialState: initialState
    reducers: {
        login: (state, action) => {
            return action.payload; // action.payload chính là thông tin user
        },
        logout: () => initialState, //null
    },
});

export const { login, logout } = userSlice.actions; // kĩ thuật destructuring: lấy ra các action từ userSlice để sử dụng
export default userSlice.reducer;