export type TLanguage = 'en' | 'ru';

export interface IIsMobileViewProp {
  isMobileView: boolean;
}

export interface ISelectOption {
  label: string;
  value: string;
}

export interface IApiErr {
  error: {
    message: string;
    code: number;
  };
}

export interface IClassName {
  className?: string;
}

export interface ISkeleton {
  isSkeletonVisible?: boolean;
}

export interface ICloseHandler {
  onClose: () => void;
}

export interface IModalBaseProps extends ICloseHandler {
  isOpen: boolean;
}

export type TCurrencyPosition = 'left' | 'right';

export interface IPhoneMaskData {
  country: string;
  code: string;
  mask: string;
}
