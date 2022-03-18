/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement a saga to async load habits from async storage at initial load
 */

import { put, call, takeLatest } from "redux-saga/effects";
import { LOCAL_STORAGE_KEYS } from "../../Constants/LocalStorageKeys";
import { AuthApi } from "../../Controllers/AuthApiController";
import { UserApi } from "../../Controllers/UserController";
import { User } from "../../Types/User";
import { getDate } from "../../Utils/GeneralUtils";
import { UserUtils } from "../../Utils/UserUtils";
import { UserActionTypes } from "./UserActions";

const syncUserWithServer = async (): Promise<User> => {
  let finalUser: User | null;
  try {
    let user = UserUtils.retrieveUserFromStorage();
    // get user token expiration date and compare it with now.getTime()
    // based on that should decide to refresh the token or not.
    // refresh logic should be have a day or week as safty net span of time.
    const userTokenExpirationDate: Date = getDate(user.tokenExpirationDate);
    if (
      userTokenExpirationDate.getTime() <
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getTime()
    ) {
      const refreshedUserTokens = await AuthApi.refreshUserToken(user as User);
      user = refreshedUserTokens;
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
        refreshedUserTokens.accessToken
      );
    }
    // Fetch user details to sync with the server along with locations
    const syncedUser = await UserApi.getUserProfile();
    // send update current location
    finalUser = { ...syncedUser };
  } catch (er) {
    throw new Error(er as string);
  }
  return finalUser;
};

function* syncUserWithServerSaga() {
  try {
    const data: User = yield call(syncUserWithServer);
    yield put({
      type: UserActionTypes.UPDATE_USER,
      payload: data,
    });
  } catch (err) {
    yield put({ type: UserActionTypes.ASYNC_GET_USER_FROM_STORAGE_FAILED });
  }
}

export function* watchForSyncUserWithServer() {
  yield takeLatest(
    UserActionTypes.ASYNC_GET_USER_FROM_STORAGE,
    syncUserWithServerSaga
  );
}
