import { configureStore } from "@reduxjs/toolkit"
import { characterReducer } from "./reducers/characterReducer.js"

const store = configureStore({
    reducer:{charactersStore:characterReducer}
})

export default store