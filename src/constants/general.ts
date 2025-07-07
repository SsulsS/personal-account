import { IPhoneMaskData } from 'types/general';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const ROUTES = {
  main: '/main',
  payments: '/payments',
  signIn: '/sign-in',
  services: '/services',
  billCreation: '/bill-creation',
};

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
export const NUMBER_REGEX =
  /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

export const SUPPORT_EMAIL = 'support@lk.ru';
export const SUPPORT_PHONE = '88005504419';
export const SUPPORT_PHONE_MASK = '0 000 000-00-00';

export const SEARCH_DEBOUNCE_DELAY = 1000;

export const SEARCH_PARAMS = { page_size: 30, page_offset: 0 };
export const USERS_PAGE_SEARCH_PARAMS = { page_size: 1000, page_offset: 0 }; //TODO снести когда бесконечный скролл прикрутим

export const ERR_CODES = {
  dbQuery: 110001,
  auth: 110005,
  token: 110006,
  permission: 113000,
  validation: 113002,
  frequencyLimit: 113004,
  wrongOldPassword: 113005,
  userAlreadyExists: 5001062,
  notFound: 113001,
  isLockedObject: 113003,
};

export const INPUT_MAX_LENGTH = 128;
export const PASSWORD_MAX_LENGTH = 50;

export const PHONE_MIN_LENGTH = 11;
export const PHONE_MAX_LENGTH = 15;
export const PHONE_WITHOUT_CODE_LENGTH = 10;
export const PAN_MIN_LENGTH = 16;
export const PAN_MAX_LENGTH = 19;
export const PASSPORT_NUMBER_LENGTH = 10;

export const PHONE_WITHOUT_PLUS_MASKS_DATA: IPhoneMaskData[] = [
  { country: 'ru', code: '7', mask: '{7} 000 000-00-00' },
  { country: 'kz', code: '7', mask: '{7} 000 000-00-00' },
  { country: 'by', code: '375', mask: '{375} 00 000-00-00' },
].sort((a, b) => (a.code > b.code ? -1 : 1));

export const PHONE_MASKS_DATA = PHONE_WITHOUT_PLUS_MASKS_DATA.map((data) => ({
  ...data,
  mask: data.mask.replace(/^\{/, '{+'),
}));

export const RU_PHONE_INPUT_PREFIX = '+7\xa0';

export const PHONE_WITHOUT_CODE_MASK = '000 000-00-00';

export const OTP_LENGTH = 6;

export const SHORT_TOAST_PARAMS = { autoClose: 2500 };
