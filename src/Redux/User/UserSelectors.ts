/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement selectors for the user part of the state
 */

import { createSelector } from "reselect";
import { RootState } from "../store";
import { User } from "../../Types/User";

export const getUser = createSelector(
  (state: RootState) => state.user,
  (user): User | null => user
);

export const isUserAuthenticated = createSelector(
  (state: RootState) => state.user,
  (user) => Boolean(user)
);
