/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement the reusable button component
 */

import React from "react";

/**
 *
 * @interface
 */
interface ButtonProps {
  /**
   * button child component if it's component of JSX elements
   *
   * @type {React.ReactNode | undefined}
   */
  children?: React.ReactNode;

  /**
   * flag to set the button as disabled
   *
   * @type {boolean | undefined}
   */
  disabled?: boolean;

  /**
   * flag to show loading indication
   *
   * @type {boolean | undefined}
   */
  loading?: boolean;

  /**
   * button on click callback
   *
   * @type {() => void}
   */
  onClick: () => void;

  /**
   * button text to display only  a string
   */
  text?: string;
}

export const Button = ({
  children,
  disabled,
  loading,
  onClick,
  text,
}: ButtonProps) => (
  <Button
    disabled={disabled || loading}
    onClick={() => !disabled && !loading && onClick()}
  >
    {!!text ? <span>{text}</span> : children}
  </Button>
);
