import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

import reducers from "./ducks";

const rootReducer = combineReducers({ ...reducers });

export const store = configureStore({
  reducer: rootReducer,
});

export const dispatch = store.dispatch;

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({ ...reducers }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
