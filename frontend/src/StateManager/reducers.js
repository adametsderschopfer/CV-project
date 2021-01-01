import { combineReducers } from "redux";

import { portfolio } from "./ducks/portfolio";
import { contact } from "./ducks/contact";

export default combineReducers({ portfolio, contact });
