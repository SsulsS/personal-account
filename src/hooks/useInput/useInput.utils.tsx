import { EMAIL_REGEX, PASSWORD_REGEX } from 'constants/general';

import { IValidationErrTexts, IValidationParams } from './useInput.types';

export const getValidationErrText = (
  value: string,
  params: IValidationParams,
  errTexts?: IValidationErrTexts
): string => {
    
  const isEmptyInputValid = value === '' && !params.required;

  if (isEmptyInputValid) {
    return '';
  }

  if (params.required) {
    const isEmptyValue = value === '';
    if (isEmptyValue) {
      return errTexts?.required ?? 'Пропущено обязательное поле';
    }
  }

  if (params.isEmail) {
    if (!value.match(EMAIL_REGEX)) {
      return errTexts?.isEmail ?? 'Введенный адрес некорректен';
    }
  }

  if (params.isPassword) {
    if (!value.match(PASSWORD_REGEX)) {
      return errTexts?.isPassword ?? 'Введенный пароль некорректен';
    }
  }

  return '';
};
