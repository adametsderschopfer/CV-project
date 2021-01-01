import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middlewares = [thunk];

const applyMiddlewares = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, applyMiddlewares);

const StateManager = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StateManager;
