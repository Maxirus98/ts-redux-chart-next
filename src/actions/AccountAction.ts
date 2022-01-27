export enum AccountActionTypes {
    INCREMENT,
    DECREMENT
}

export type AccountAction = {
    type: AccountActionTypes;
    payload: number;
};