/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define a form object with it's inputs data
 */

/**
 * interface that defines a single input object
 *
 * @interface
 */
export interface FormInput {
  /**
   * flag to set an input as required
   *
   * @type {boolean}
   */
  required?: boolean;

  /**
   * input validation status
   *
   * @type {boolean}
   */
  valid: boolean;

  /**
   * input value
   *
   * @type {string | boolean}
   */
  value: string | boolean;
}

/**
 * interface that defines the a Form inputs data
 *
 * @interface
 */
export type FormData = {
  /**
   * populated form inputs each with the type of form input
   *
   * @type {RegisterFormInput}
   */
  [index: string]: FormInput;
};
