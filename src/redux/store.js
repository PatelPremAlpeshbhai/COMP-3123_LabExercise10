import { createStore } from "redux";
import rootReducer from "./reducers"; // Import root reducer

// Create the Redux store
const store = createStore(rootReducer);

export default store;
