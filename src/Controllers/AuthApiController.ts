/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement api controllers for server auth calls
 */

import { AxiosResponse } from "axios";
import { RegisterInput } from "../Types/Api/RegisterInput";
import { FormData } from "../Types/Form";
import { LoginInput } from "../Types/Api/LoginInput";
import { SurAxios } from "../Api/SurAxios";
import { LOCAL_STORAGE_KEYS } from "../Constants/LocalStorageKeys";
import { ServerResponse } from "../Types/ServerResponse";
import { User } from "../Types/User";

/**
 * class to handle server auth api calls
 *
 * @class
 * @exports
 */
export class AuthApi {
  /**
   * to make a call to the server to register a user with a given data
   *
   * @param {FormData} formInput the register form input data
   *
   * @returns {Promise<User>} user data mapped to the app formatted user
   */
  static register = async (formInput: FormData): Promise<User> => {
    try {
      const results: AxiosResponse<ServerResponse<User>> = await SurAxios.post(
        "/register",
        {
          email: formInput.email.value,
          name: formInput.name.value,
          last_name: formInput.last_name.value,
          password: formInput.password.value,
          password_confirmation: formInput.confirmPassword.value,
          phone_number: formInput.phone.value as string,
        } as RegisterInput
      );

      const user: User = await this.getUser(results);
      return user;
    } catch (er: any) {
      if ("response" in er) {
        console.log(
          "[surreal-auth-error-code-1] server sends undefined error..",
          er
        );
      }
      throw new Error(
        "response" in er ? "Something went wrong, Please try again." : er
      );
    }
  };

  /**
   * to make a call to the server to login a user with the email and password
   *
   * @param {FormData} formInput the login form input data
   */
  static login = async (formInput: FormData) => {
    try {
      const results: AxiosResponse<ServerResponse<User>> = await SurAxios.post(
        "/login",
        {
          email: formInput.email.value,
          password: formInput.password.value,
        } as LoginInput
      );

      const user: User = await this.getUser(results);
      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
      return user as User;
    } catch (er: any) {
      if ("response" in er) {
        console.log(
          "[surreal-auth-error-code-1] server sends undefined error..",
          er
        );
      }
      throw new Error("response" in er ? "Your password is incorrect." : er);
    }
  };

  /**
   * to make a call to the server to login a user with google
   *
   * @param {string} token google token
   */
  static googleLogin = async (token: string) => {
    try {
      const results: AxiosResponse<ServerResponse<User>> = await SurAxios.post(
        "/auth/social/google",
        {
          access_token: token,
        }
      );

      const user: User = await this.getUser(results);
      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
      return user as User;
    } catch (er: any) {
      if ("response" in er) {
        console.log(
          "[surreal-auth-error-code-2] server sends undefined error..",
          er
        );
      }
      throw new Error("response" in er ? er.response.error_des : er);
    }
  };

  /**
   * to extract formatted user from a server user response
   *
   * @param {AxiosResponse<ServerResponse<User>>} response request server user response
   * @returns {User} the formatted user
   */
  static getUser = async (
    response: AxiosResponse<ServerResponse<User>>
  ): Promise<User> => {
    try {
      const data: ServerResponse<User> = response.data;

      const user: User = {
        ...data.content!,
      };
      return user;
    } catch (er: any) {
      throw new Error(er);
    }
  };

  /**
   * to refresh user token when opening the app
   *
   * @param {User} user current user
   * @returns {Promise<User>} the new user with refreshed tokens
   */
  static refreshUserToken = async (user: User): Promise<User> => {
    try {
      const results: AxiosResponse<ServerResponse<User>> = await SurAxios.post(
        "/update_token",
        {
          refresh_token: user.refreshToken,
        }
      );
      const refresheUser: User = await this.getUser(results);
      return refresheUser;
    } catch (er: any) {
      if ("response" in er) {
        console.log(
          "[surreal-auth-error-code-1] refresh token is expired..",
          er
        );
      }
      throw new Error(
        "response" in er
          ? "[surreal-auth-error-code-1] refresh token is expired."
          : `[surreal-auth-error-code-1] ${er}`
      );
    }
  };

  /**
   * to recover user's password
   *
   * @param {string} email user email
   * @returns {Promise<any>}
   */
  static recoverPassword = async (email: string): Promise<any> => {
    try {
      const results: AxiosResponse<any> = await SurAxios.post(
        "/password/email",
        {
          email: email,
        }
      );
      console.log("recover passowrd send email results", results);
    } catch (er: any) {
      if ("response" in er) {
        console.log(
          "[surreal-auth-error-code-2] can't send email for passowrd recovery..",
          er
        );
      }
      throw new Error("response" in er ? "Email address is not verified." : er);
    }
  };

  /**
   * to recover user's password
   *
   * @param {string} token user token
   * @param {string} email user email
   * @param {FormData} formInput the login form input data
   * @returns {Promise<any>}
   */
  static resetPassword = async (
    token: string,
    email: string,
    formInput: FormData
  ): Promise<any> => {
    try {
      const results: AxiosResponse<any> = await SurAxios.post(
        "/password/reset",
        {
          email: email,
          token: token,
          password: formInput.password.value,
          password_confirmation: formInput.confirmPassword.value,
        }
      );
      console.log("reset password results", results);
    } catch (er: any) {
      if ("response" in er) {
        console.log("[surreal-auth-error-code-2] can't Reset password..", er);
      }
      throw new Error("response" in er ? "Reset Link is not verified." : er);
    }
  };
}
