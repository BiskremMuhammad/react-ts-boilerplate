/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description defines the base redux store
 */

import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

import { User } from "../Types/User";
import { UserActionTypes } from "./User/UserActions";
import { UsersReducer } from "./User/UserReducer";
import { sagaWatchers } from "./SagaWatchers";
import { FeatureStateType } from "./Feature/FeatureActions";
import { FeatureReducer } from "./Feature/FeatureReducer";

/**
 * interface that defines the glabal store
 *
 * @interface
 * @exports
 */
export interface GlobalStore {
  /**
   * Orders
   *
   * @type {FeatureStateType}
   * @memberof GlobalStore
   */
  feature: FeatureStateType;

  /**
   * the user part of the store
   *
   * @type {User | null}
   * @memberof GlobalStore
   */
  user: User | null;
}

const sagaWorker = createSagaMiddleWare();

const rootReducer = combineReducers<GlobalStore>({
  feature: FeatureReducer,
  user: UsersReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaWorker));
export const reduxPersistor = persistStore(store);
sagaWorker.run(sagaWatchers);

// Initially load user from async storage
store.dispatch({ type: UserActionTypes.ASYNC_GET_USER_FROM_STORAGE });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
