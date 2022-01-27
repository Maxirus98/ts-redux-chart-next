import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Languages } from "../actions/TranslateAction";
import reducers from "../reducers";

export interface IStoreState {
    account: number;
    language: Languages;
}

const store = createStore(reducers, applyMiddleware(thunk));
export default store;