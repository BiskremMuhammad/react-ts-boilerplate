/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define the User type
 */

/**
 * interface that defines the User object
 *
 * @interface
 * @exports
 */
export interface User {
  /**
   * user jwt access token
   *
   * @type {string}
   */
  accessToken: string;

  /**
   * user registeration date
   *
   * @type {Date}
   */
  createdAt: Date;

  /**
   * user's email
   *
   * @type {string}
   */
  email: string;

  /**
   * flag if user's email is verified
   *
   * @type {boolean}
   */
  emailVerified: boolean;

  /**
   * user first name
   *
   * @type {string}
   */
  firstName: string;

  /**
   * User id
   *
   * @type {string}
   */
  id: string;

  /**
   * user last name
   *
   * @type {string}
   */
  lastName: string;

  /**
   * user's phone number
   *
   * @type {string}
   */
  phoneNumber: string;

  /**
   * user's refresh token
   *
   * @type {string}
   */
  refreshToken: string;

  /**
   * token date time of expiration
   *
   * @type {string}
   */
  tokenExpirationDate: string;

  /**
   * user's latest updated date and time
   *
   * @type {Date}
   */
  updatedAt: Date;
}
