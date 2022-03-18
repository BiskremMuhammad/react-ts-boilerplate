/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement a user utility helper functions
 */

import { LOCAL_STORAGE_KEYS } from "../Constants/LocalStorageKeys";
import { getDate } from "./GeneralUtils";

interface User {
  tokenExpirationDate: string;
  accessToken: string;
}

export class UserUtils {
  /**
   * to save the current user into the local starage
   *
   * @param {User} user the user to save in the local storage
   */
  static saveUserToStorage = (user: User): void => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.AUTHENTICATED_USER,
      JSON.stringify(user)
    );
  };

  /**
   * to save the current user into the local starage
   *
   * @returns {Promise<User>} user data parsed to the app formatted user
   */
  static retrieveUserFromStorage = (): User => {
    const localUser: string | null = localStorage.getItem(
      LOCAL_STORAGE_KEYS.AUTHENTICATED_USER
    );
    if (!localUser) {
      throw new Error("No user data saved in local storage.");
    }

    const user = JSON.parse(localUser);
    return {
      ...user,
      createdAt: getDate(user.created_at),
      updatedAt: getDate(user.updated_at),
    };
  };

  /**
   * to remove the current user from the local starage
   */
  static logout = (): void => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER);
  };
}
