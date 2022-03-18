/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement some selectors for a feature part of state
 */

import { createSelector } from "reselect";

import { RootState } from "../store";
import { FeatureStateType } from "./FeatureActions";

export const getOrders = createSelector(
  (state: RootState) => state.feature.loading,
  (state: RootState) => state.feature.data,
  (state: RootState) => state.feature.errors,
  (loading, data, errors): FeatureStateType => ({
    loading,
    data,
    errors,
  })
);
