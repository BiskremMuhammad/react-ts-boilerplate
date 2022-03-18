/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement validation utility functions
 */

import { FormData, FormInput } from "../Types/Form";

/**
 * helper class includes some utility functions for input validations
 *
 * @class
 * @exports
 */
export class Validate {
  /**
   * to test an input if it is a valid name
   *
   * @param {string} input the name string to check if it is a valid name
   * @returns {boolean} validation results
   */
  static isValidName = (input: string): boolean => {
    if (!input.trim()) {
      return false;
    }
    const nameRegEx = new RegExp(/^([\w\-'_\'])+\s*([\w'_\-\'\s])*$/, "gi");
    return nameRegEx.test(input);
  };

  /**
   * to test an input if it is a valid email address
   *
   * @param {string} input the email string to check if is valid email
   * @returns {boolean} validation results
   */
  static isEmail = (input: string): boolean => {
    if (!input.trim()) {
      return false;
    }
    const emailRegEx = new RegExp(
      /^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
      "gi"
    );
    return emailRegEx.test(input);
  };

  /**
   * to test an input if it is a valid phone number
   *
   * @param {string} input the input string to check if it is a valid phone number
   * @returns {boolean} validation results
   */
  static isValidPhoneNumber = (input: string): boolean => {
    if (!input.trim()) {
      return false;
    }
    const phoneNumberRegex = new RegExp(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "g"
    );
    return phoneNumberRegex.test(input);
  };

  /**
   * to test an input if it is a valid password
   *
   * @param {string} input the input string to check if it is a valid password
   * @returns {boolean} validation results
   */
  static isValidPassword = (input: string): boolean => {
    if (input.trim().length < 6) {
      return false;
    }
    return true;
  };

  /**
   * to test an input if it is a valid payment card number
   *
   * @param {string} input the input string to check if it is a valid payment card number
   * @returns {boolean} validation results
   */
  static isValidCardNumber = (input: string): boolean => {
    if (input.trim().length < 16 || input.trim().length > 16) {
      return false;
    }
    return true;
  };

  /**
   * to test an input if it is a valid card cvc number
   *
   * @param {string} input the input string to check if it is a valid card cvc number
   * @returns {boolean} validation results
   */
  static isValidCardCVC = (input: string): boolean => {
    if (input.trim().length < 3 || input.trim().length > 3) {
      return false;
    }
    return true;
  };

  static isValidMessage = (input: string): boolean => {
    if (input.trim().length > 2000) {
      return false;
    }
    return true;
  };

  /**
   * to test a form for it's validity
   *
   * @param {FormData} form the form to check it's validity
   * @returns {boolean} validation results
   */
  static isValidForm = (form: FormData): boolean => {
    return (
      Object.entries(form).filter(
        ([input, values]: [string, FormInput]) =>
          (!values.required && values.valid) ||
          (values.required && values.valid && !!values.value)
      ).length ===
      Object.entries(form).filter(
        ([input, values]: [string, FormInput]) =>
          values.required || (!values.required && values.valid)
      ).length
    );
  };
}
