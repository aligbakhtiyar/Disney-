import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/user/movie/movieSlice'
// const store = require('../store/app')
// state = store.default.getState()

 
// export default configureStore({
//     reducer:{
//         user: userReducer,
//     },
//     middleware: getDefaultMiddleware({
//         serializableCheck: false,
//     })
// }) 


const reducer = {
    user: userReducer,
    movie: movieReducer,
};

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;







