import { combineReducers } from "redux";
import { IStoreState } from "../models/store";
import { accountReducer } from "./accountReducer";
import { translateReducer } from "./languageReducer";


export default combineReducers<IStoreState>({
    account: accountReducer,
    language: translateReducer,
});