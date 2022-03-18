/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define the base server response type
 */

/**
 * interface that defines the base response type
 *
 * @exports
 */
export type ServerResponse<T> = {
  /**
   * response body with a generic type or null when failure
   *
   * @type {T | null}
   */
  content: T | null;

  /**
   * request date
   *
   * @type {string}
   */
  date?: string;

  /**
   * error code if the is any
   *
   * @type {number}
   */
  error_code: number;

  /**
   * reponse status results "success" or failed with "error"
   *
   * @type {"success" | "error"}
   */
  result: "success" | "error";
};
