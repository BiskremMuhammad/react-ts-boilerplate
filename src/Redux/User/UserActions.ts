/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement actions and action type definitions related to the user
 */

import { User } from "../../Types/User";

/**
 * enum that defines all action types
 *
 * @enum
 * @exports
 */
export enum UserActionTypes {
  ASYNC_GET_USER_FROM_STORAGE = "ASYNC_GET_USER_FROM_STORAGE",
  ASYNC_GET_USER_FROM_STORAGE_FAILED = "ASYNC_GET_USER_FROM_STORAGE_FAILED",
  UPDATE_USER = "UPDATE_USER",
  DELETE_USER = "DELETE_USER",
  LOGOUT = "LOGOUT",
}

/**
 * interface that definse the Action structure
 *
 * @interface
 * @exports
 */
export interface UserActions {
  /**
   * the type of the action
   *
   * @type {UserActionTypes}
   * @memberof UserActions
   */
  type: UserActionTypes;

  /**
   * the payload of action
   *  - of type User when to add a new or update a User
   *  - of type string when delete >> represents the id of the User
   *
   * @type {User | string}
   * @memberof UserActions
   */
  payload?: User | string;
}
