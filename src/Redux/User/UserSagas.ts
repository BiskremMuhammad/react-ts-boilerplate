/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description gather user related sagas in one place
 */

import { watchForSyncUserWithServer } from "./SyncUserWithServer";

export const userSagas = [watchForSyncUserWithServer()];
