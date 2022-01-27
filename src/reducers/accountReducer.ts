import { AccountAction, AccountActionTypes } from "../actions/AccountAction";

export const accountReducer = (state = 0, action: AccountAction) => {
    switch (action.type) {
        case AccountActionTypes.INCREMENT:
            return state += action.payload
        case AccountActionTypes.DECREMENT:
            return state -= action.payload;
        default:
            return state;
    }
}