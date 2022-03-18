/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define App route names
 */

/**
 * enum the defines App Route names
 *
 * @enum
 * @exports
 */
export enum Routes {
  HOME = "/",
  NOT_FOUND = "404",
  // account screens
  ACCOUNT_SCREENS = "account",
  SETTINGS = "settings",
  // AUTH screens
  AUTH_CREATE_ACCOUNT = "register",
  AUTH_LOGIN = "login",
  AUTH_RECOVER_PASSWORD = "forget_password",
}
