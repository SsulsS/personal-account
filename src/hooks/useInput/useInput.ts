import { useState } from 'react';

import { TUseInputValidation } from './useInput.types';
import { getValidationErrText } from './useInput.utils';

export const useInputValidation: TUseInputValidation = (
  defaultValue,
  params = {},
  { errTexts } = {}
) => {
  params = {
    required: true,
    isEmail: false,
    isPassword: false,
    ...params,
  };

  const [value, setValue] = useState(defaultValue || '');
  const [errText, setError] = useState('');
  const [isValid, setIsValid] = useState(
    () => !getValidationErrText(value, params, errTexts)
  );

  const validate = (value: string) => {
    setError('');

    const err = getValidationErrText(value, params, errTexts);

    setIsValid(!err);
    setError(err);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
    validate(newValue);
  };

  const handleClear = () => {
    setValue('');
    setError('');
  };

  return {
    value,
    isValid,
    errText,
    handleChange,
    handleClear,
  };
};
