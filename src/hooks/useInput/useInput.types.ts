export interface IValidationParams {
  required?: boolean;
  isEmail?: boolean;
  isPassword?: boolean;
}

export interface IValidationErrTexts {
  required?: string;
  isEmail?: string;
  isPassword?: string;
}

export type TUseInputValidation = (
  defaultValue: string | undefined,
  params?: IValidationParams,
  extraParams?: {
    errTexts?: IValidationErrTexts;
  }
) => {
  value: string;
  isValid: boolean;
  errText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
};
