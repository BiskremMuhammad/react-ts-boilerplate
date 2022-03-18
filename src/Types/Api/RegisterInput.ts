/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define server register end point data object
 */

/**
 * interface that defines the Register input that should be sent to server register end point
 *
 * @interface
 * @exports
 */
export interface RegisterInput {
  /**
   * user email
   *
   * @type {string}
   */
  email: string;

  /**
   * user name
   *
   * @type {string}
   */
  name: string;

  /**
   * user last name
   *
   * @type {string}
   */
  last_name: string;

  /**
   * user password
   *
   * @type {string}
   */
  password: string;

  /**
   * confirm password
   *
   * @type {string}
   */
  password_confirmation: string;

  /**
   * user phone number
   *
   * @type {string}
   */
  phone_number: string;
}
