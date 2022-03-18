/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement a user Controller methods
 */

import { UpdateProfileInput } from "../Types/Api/UpdateProfileInput";
import { ServerResponse } from "../Types/ServerResponse";
import { User } from "../Types/User";
import { FormData } from "../Types/Form";
import { SurAxios } from "../Api/SurAxios";
import { ChangePasswordInput } from "../Types/Api/ChangePasswordInput";

/**
 * Another Api class for making user related api calls
 *
 * @class
 * @exports
 */
export class UserApi {
  /**
   * to get user's profile data from the database
   *
   * @param {string} userId user id query param in the link sent to user's email
   * @param {string} hash tha hash code query param in the link sent to user's email
   *
   * @returns {Promise<void>} verified user response
   */
  static verifyEmail = async (userId: string, hash: string): Promise<void> => {
    try {
      const results = await SurAxios.get(`/email/verify/${userId}/${hash}`);
      const data: ServerResponse<{ message: string }> = results.data;
      if (data && data.result === "success" && data.content?.message) {
        return;
      } else if (data && data.result === "error" && data.content?.message) {
        throw new Error(data.content?.message);
      } else {
        throw new Error("Email couldn't be verified.");
      }
    } catch (err: any) {
      throw new Error(err);
    }
  };

  /**
   * to get user's profile data from the database
   *
   * @returns {Promise<User>} synced user data from the server
   */
  static getUserProfile = async (): Promise<User> => {
    try {
      const results = await SurAxios.get("/profile");
      return results.data;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  /**
   * to update user's contact info on the database
   *
   * @param {User} user the context uesr
   * @param {FormData} input the new contact information
   *
   * @returns {Promise<User>} the update user
   */
  static updateProfile = async (user: User, input: FormData): Promise<User> => {
    // send update to the endpoint
    try {
      const updateResults = await SurAxios.put(`/profile`, {
        email: input.email.value as string,
        firstName: input.name.value as string,
        lastName: input.last_name.value as string,
        phoneNumber: input.phoneNumber.value as string,
      } as UpdateProfileInput);
      return updateResults.data;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  /**
   * to change user password
   *
   * @param {FormData} input the new password from data
   *
   * @returns {Promise<void>} the async return callback
   */
  static changePassword = async (input: FormData): Promise<void> => {
    try {
      await SurAxios.put(`/password/update`, {
        old_password: input.oldPassword.value,
        new_password: input.newPassword.value,
        new_password_confirmation: input.newPasswordConfirm.value,
      } as ChangePasswordInput);
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
