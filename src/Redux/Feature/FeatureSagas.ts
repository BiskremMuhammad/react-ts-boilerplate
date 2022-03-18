/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement saga watchers for a feature part of state
 */

import { call, put, takeLatest, select } from "redux-saga/effects";
import { getFeature } from "./FeatureApi";
import { FeatureActionTypes } from "./FeatureActions";
import { isUserAuthenticated } from "../User/UserSelectors";
import { ServerResponse } from "../../Types/ServerResponse";
import { FeatureResponse } from "../../Types/FeatureResponse";

export function* getFeatureSaga() {
  const user: boolean = yield select(isUserAuthenticated);
  if (user) {
    try {
      const data: ServerResponse<Array<FeatureResponse>> = yield call(
        getFeature
      );
      yield put({
        type: FeatureActionTypes.SET_FEATURE,
        payload: data,
      });
    } catch (error) {
      yield put({
        type: FeatureActionTypes.FETSH_FEATURE_FAILED,
        payload: error,
      });
      console.log("[surreal-server-error]", error);
    }
  }
}

// --- Watchers
export function* fetchOrdersWatcher() {
  yield takeLatest(FeatureActionTypes.FETCH_FEATURE, fetchFeatureSaga);
}

export function* fetchFeatureSaga() {
  yield call(getFeatureSaga);
}
