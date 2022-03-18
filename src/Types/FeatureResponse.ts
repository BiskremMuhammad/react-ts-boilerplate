/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description define the server response for a store
 */

import { ServerResponse } from "./ServerResponse";

/**
 * the store server response type
 *
 * @exports
 */
export type FeatureServerResponse = ServerResponse<FeatureResponse>;

/**
 * interface that defines the store server response
 *
 * @interface
 * @exports
 */
export interface FeatureResponse {
  /**
   * store creation datetime
   *
   * @type {string}
   */
  created_at: string;

  /**
   * store id
   *
   * @type {number}
   */
  id: number;

  /**
   * store name
   *
   * @type {string}
   */
  name: string;

  /**
   * store last update datetime
   *
   * @type {string}
   */
  updated_at: string;
}
