/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define server login end point data object
 */

/**
 * interface that defines the login input that should be sent to server login end point
 *
 * @interface
 * @exports
 */
export interface LoginInput {
  /**
   * user email
   *
   * @type {string}
   */
  email: string;

  /**
   * user password
   *
   * @type {string}
   */
  password: string;
}
