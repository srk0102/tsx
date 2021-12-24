import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index";

// const composeEnhancers =
//   process.env.NODE_ENV !== 'production' &&
//   window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
//     window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
//       name: 'GIS', actionsBlacklist: ['REDUX_STORAGE_SAVE']
//     }) : compose;
// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
//   // other store enhancers if any
// );

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;