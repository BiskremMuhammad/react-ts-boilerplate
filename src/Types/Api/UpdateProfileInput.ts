/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define server update user contact information endpoint data object
 */

/**
 * interface that defines the update user contact information input that should be sent to server
 *
 * @interface
 * @exports
 */
export interface UpdateProfileInput {
  /**
   * user email
   *
   * @type {string}
   */
  email?: string;

  /**
   * user first name
   *
   * @type {string}
   */
  firstName?: string;

  /**
   * user last name
   */
  lastName?: string;

  /**
   * user phone number
   *
   * @type {string}
   */
  phoneNumber?: string;
}
