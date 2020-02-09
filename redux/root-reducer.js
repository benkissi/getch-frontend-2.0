import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import searchReducer from './search/search-reducer'

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer
});

export default persistReducer(persistConfig, rootReducer);
