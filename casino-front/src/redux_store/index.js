import { configureStore } from "@reduxjs/toolkit";

import globalReducer from "./globalReducer"
import mainPageReducer from "./mainPageReducer"


export default configureStore({
    reducer: {
        globalReducer: globalReducer,
        mainPageReducer: mainPageReducer,
    }
})