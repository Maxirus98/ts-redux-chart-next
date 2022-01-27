import { connect } from "react-redux";
import { AccountActionTypes } from "./actions/AccountAction";
import store from "./models/store";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Languages } from "./actions/TranslateAction";
function App() {
  const { t, i18n } = useTranslation();
  const state = store.getState();

  useEffect(() => {
    i18n.changeLanguage(state.language);

  }, [state.language]);
  return (
    <div>
      <h1>{t("Amount")} : {state.account}</h1>
      <button onClick={() => store.dispatch({ type: AccountActionTypes.INCREMENT, payload: 10 })}>+</button>
      <button onClick={() => store.dispatch({ type: AccountActionTypes.DECREMENT, payload: 10 })}>-</button>
      <button onClick={() => {
        let language = state.language === Languages.FR ? Languages.EN : Languages.FR;
        store.dispatch({ type: language })
      }}>{t("ToggleLanguage")}</button>
    </div>
  );
}


const mapStateToProps = (state: number) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
