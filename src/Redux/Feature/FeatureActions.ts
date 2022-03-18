/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description defines actions and types for a Feature part of state
 */

import { FeatureResponse } from "../../Types/FeatureResponse";

export interface FeatureStateType {
  loading: boolean;
  data: FeatureResponse[];
  errors?: string;
}

export enum FeatureActionTypes {
  FETCH_FEATURE = "FETCH_FEATURE",
  SET_FEATURE = "SET_FEATURE",
  FETSH_FEATURE_FAILED = "FETSH_FEATURE_FAILED",
}

/**
 * interface that definse the Action structure
 *
 * @interface
 * @exports
 */
export interface FeatureActions {
  /**
   * the type of the action
   *
   * @type {FeatureActionTypes}
   * @memberof FeatureActions
   */
  type: FeatureActionTypes;

  /**
   * the payload of action
   *  - of type string when there is an error
   *  - of type boolean when update loading state
   *  - of type FeatureResponse[] when set the Feature state
   *
   * @type {Product | string}
   * @memberof ProductActions
   */
  payload?: string | boolean | FeatureResponse[];
}
