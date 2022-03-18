/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description entry point for all saga watchers
 */

import { all } from "redux-saga/effects";
import { userSagas } from "./User/UserSagas";

export function* sagaWatchers() {
  yield all([...userSagas]);
}
