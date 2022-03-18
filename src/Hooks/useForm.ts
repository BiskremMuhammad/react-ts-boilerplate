/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement a hook to use and validate form data
 */

import { useState } from "react";
import { FormData } from "../Types/Form";
import { Validate } from "../Utils/Validation";

/**
 * a hook to populate form inputs with their validation checks
 *
 * @param {FormData} initalInput initial form input data
 * @returns {[formData, setFormData, onChangeInput, checkInputForValidation]} hook functions to reuse
 */
export const useForm = (
  initalInput: FormData
): [
  FormData,
  React.Dispatch<React.SetStateAction<FormData>>,
  (input: keyof FormData, value: string | boolean) => void,
  (input: keyof FormData, value: string | boolean) => boolean
] => {
  const [formData, setFormData] = useState<FormData>(initalInput);

  /**
   * to change an input value
   *
   * @param {keyof FormData} input input name to map in the register form input object
   * @param {string | boolean} value new input value
   */
  const onChangeInput = (input: keyof FormData, value: string | boolean) => {
    // const validState: boolean = checkInputForValidation(input, value);
    const newInputVal: FormData = {
      ...formData,
      [input]: { ...formData[input], value, valid: true },
    };
    setFormData(newInputVal);
  };

  /**
   * to check an input validation state
   *
   * @param {keyof FormData} input the input name
   * @param {string | boolean} value the input value
   * @returns {boolean} input validation state
   */
  const checkInputForValidation = (
    input: keyof FormData,
    value: string | boolean
  ): boolean => {
    let validState: boolean = true;
    if (input === "name" || input === "last_name") {
      validState = Validate.isValidName((value as string).trim());
    } else if (input === "email") {
      validState = Validate.isEmail(value as string);
    } else if (input === "phone" || input === "phoneNumber") {
      validState = Validate.isValidPhoneNumber(value as string);
    } else if (input === "cardNumber") {
      validState = Validate.isValidCardNumber(value as string);
    } else if (input === "cardCvc") {
      validState = Validate.isValidCardCVC(value as string);
    } else if (
      input === "password" ||
      input === "oldPassword" ||
      input === "newPassword"
    ) {
      validState = Validate.isValidPassword(value as string);
    } else if (input === "confirmPassword") {
      validState = formData.password.value === value;
    } else if (input === "newPasswordConfirm") {
      validState = formData.newPassword.value === value;
    } else if (input === "message") {
      validState = Validate.isValidMessage(value as string);
    } else if (input === "agreeToTerms") {
      validState = value as boolean;
    }
    return validState;
  };

  return [formData, setFormData, onChangeInput, checkInputForValidation];
};
