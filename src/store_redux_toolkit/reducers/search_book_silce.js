import { createSlice } from '@reduxjs/toolkit'


export const book_slice = createSlice({
  name: 'books_reducers',
  initialState: {
    search_data: [],
    all_data: []

  },
  reducers: {
    searchData: (state, action) => {
      // console.log(action.payload);

      state.search_data = action.payload;


    },
    allData: (state, action) => {
      // console.log(action.payload);

      state.all_data = action.payload;


    },
    // add_user: (state,action) => {
    //        state.user_data  = action.payload; 

    // },
    // start_user:(state)=>{
    //   state.loading=true;
    // },
    // success_user:(state)=>{
    //   state.error=false;
    //   state.loading=null;
    // },
    // error_user:(state)=>{
    //   state.loading=false;
    //   state.error=true;
    // }
  },
})

export const { searchData, allData } = book_slice.actions

export default book_slice.reducer