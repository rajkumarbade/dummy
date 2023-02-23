import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./reducer";
import { reducer as formReducer } from "redux-form";
import { watchUser } from "./saga";

const rootReducer = combineReducers({
  count: Reducer,
  form: formReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(watchUser);
