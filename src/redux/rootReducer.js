import { combineReducers } from "redux";
import suraReducer from "./sura/suraReducer";

const rootReducer = combineReducers({
  sura: suraReducer,
});

export default rootReducer;
