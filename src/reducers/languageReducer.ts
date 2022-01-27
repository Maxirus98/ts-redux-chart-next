import { TranslateAction, Languages } from "../actions/TranslateAction";

export const translateReducer = (state = Languages.FR, action: TranslateAction) => {
    switch (action.type) {
        case Languages.FR:
            return Languages.FR;
        case Languages.EN:
            return Languages.EN;
        default:
            return state;
    }
}