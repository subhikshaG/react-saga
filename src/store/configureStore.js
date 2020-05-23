import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router"
import createSagaMiddleware from 'redux-saga';
import reducer from "../reducer/reducer";
import { rootSaga } from '../saga/saga';

export default function configureStore(initalState = {},history){
//const initalState = {};
let middleware = [];

let store;
console.log("store");
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
middleware.push(routerMiddleware(history))

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    reducer,
    initalState,
    compose(
      applyMiddleware(...middleware),
      ReactReduxDevTools
    )
  );
  console.log("action if")
  sagaMiddleware.run(rootSaga);
} else {
  store = createStore(
    reducer,
    initalState,
    compose(applyMiddleware(...middleware))
  );
  console.log("action")
  sagaMiddleware.run(rootSaga);
}
return store;

}

