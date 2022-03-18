/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement Users reducer
 */

import { User } from "../../Types/User";
import { UserUtils } from "../../Utils/UserUtils";
import { UserActions, UserActionTypes } from "./UserActions";

export const UsersReducer = (
  state: User | null = null,
  action: UserActions
): User | null => {
  let user: User | null = state;
  switch (action.type) {
    case UserActionTypes.UPDATE_USER:
      user = {
        ...(action.payload as User),
      };
      break;
    case UserActionTypes.LOGOUT:
      user = null;
      UserUtils.logout();
      break;
  }

  if (user) {
    UserUtils.saveUserToStorage(user);
  }

  return user;
};
