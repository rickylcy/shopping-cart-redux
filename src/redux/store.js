import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

export const store = createStore(rootReducer, composeWithDevTools());
