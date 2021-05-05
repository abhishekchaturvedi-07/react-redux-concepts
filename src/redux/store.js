import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };


const store = createStore(rootReducer, composeWithDevTools());

export default store;
