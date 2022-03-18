/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define server change user password endpoint data object
 */

/**
 * interface that defines the change user password input that should be sent to server
 *
 * @interface
 * @exports
 */
export interface ChangePasswordInput {
  /**
   * user's new password
   *
   * @type {string}
   */
  new_password: string;

  /**
   * the new password confirmation
   *
   * @type {string}
   */
  new_password_confirmation: string;

  /**
   * user's old password
   *
   * @type {string}
   */
  old_password: string;
}
