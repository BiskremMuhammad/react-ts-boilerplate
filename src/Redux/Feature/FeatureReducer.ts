/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement the reducer for the feature part of state
 */

import { Reducer } from "redux";
import { FeatureActionTypes, FeatureStateType } from "./FeatureActions";

const initialState: FeatureStateType = {
  data: [],
  errors: undefined,
  loading: true,
};

/**
 * Feature Reducer
 *
 * @param {FeatureStateType} state
 * @param action
 */
export const FeatureReducer: Reducer<FeatureStateType> = (
  state: FeatureStateType = initialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case FeatureActionTypes.FETCH_FEATURE: {
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    }
    case FeatureActionTypes.SET_FEATURE: {
      return {
        ...state,
        data: payload,
        loading: false,
      };
    }
    case FeatureActionTypes.FETSH_FEATURE_FAILED: {
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
