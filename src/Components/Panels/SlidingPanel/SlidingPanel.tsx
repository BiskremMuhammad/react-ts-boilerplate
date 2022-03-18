/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement the sliding panel reusable component
 */

import React from "react";

/**
 *
 * @interface
 */
interface SlidingPanelProps {
  /**
   * panel title
   *
   * @type {string | undefined}
   */
  title?: string;
}

export const SlidingPanel = ({ title }: SlidingPanelProps) => (
  <div>{!!title && <h1>{title}</h1>}</div>
);
