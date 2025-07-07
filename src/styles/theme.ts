import { createTheme } from '@mui/material';

import { IPalette, TShadows } from 'types/theme';

export const DEFAULT_PALETTE: IPalette = {
  primary: {
    lighter: '#E3F4FB', // очень светлый голубой
    light: '#7DD3F7',   // светлый голубой
    main: '#37ACDE',    // основной голубой
    dark: '#2179A6',    // тёмный голубой
  },
  secondary: {
    light: '#B6E6F9',   // светло-голубой
    main: '#2C8CE5',    // насыщенный голубой
    dark: '#185A8C',    // тёмно-голубой
  },
  error: {
    lighter: '#F2D6D6',
    light: '#F88082',
    main: '#DA1D20',
    dark: '#B7070A',
  },
  warning: {
    lighter: '#FFF6E0',
    main: '#FFB300',
  },
  info: {
    main: '#37ACDE',
  },
  success: {
    light: '#D2F8E5',
    main: '#27AE60',
  },
  text: {
    primary: '#1F1D1C',
    secondary: '#4A3C73',
    tertiary: '#71758E',
    invertedPrimary: '#F6F9FA',
    accent: '#37ACDE',
    error: '#DA1D20',
    success: '#27AE60',
    disabled: '#CDCADC',
  },
  background: {
    primary: '#F8FCFF',
    secondary: '#E3F4FB',
    neutral: '#E3F4FB',
    line: '#B6E6F9',
    overlay: '#37ACDE33',
  },
  controls: {
    dark: '#2179A6',
    selected: '#7DD3F7',
    disabled: '#E3F4FB',
    focus: '#37ACDE',
  },
  gradient: {
    light: 'linear-gradient(57deg, #E3F4FB 27.48%, #7DD3F7 80.93%)',
    main: 'linear-gradient(90deg, #37ACDE 18.75%, #2C8CE5 88.02%)',
  },

  // возможно в extra необходимо распределить эти цвета отсюда
  operationHistory: {
    created: '#37ACDE',
    awaited: '#7DD3F7',
    partiallyCompleted: '#B6E6F9',
    completed: '#27AE60',
    sent: '#2C8CE5',
    refunded: '#B6E6F9',
    err: '#DA1D20',
  },
};

export const DEFAULT_SHADOWS: TShadows = [
  'none',
  '0px 4px 30px 0px rgba(44, 19, 97, 0.10)',
  '-6px -6px 16px 4px rgba(44, 19, 97, 0.08)',
  ' 0px 0px 4.105px 0px rgba(44, 39, 101, 0.02), 0px 4.105px 20.526px 0px rgba(43, 44, 132, 0.04)',
];

export const BASE_THEME = {
  typography: {
    fontFamily: '"Noto Sans", Arial, sans-serif',
    secondaryFontFamily: '"Open Sans"',
    lineHeight: 1.3,
  },

  breakpoints: {
    values: {
      xxs: 0,
      xs: 550,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1440,
    },
  },

  widths: {
    page: 1440,
    modalContent: 302,
  },

  borderRadius: {
    sm: 6,
    lg: 10,
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

const DEFAULT_THEME = {
  palette: DEFAULT_PALETTE,
  shadows: DEFAULT_SHADOWS,
};

//исправить ошибку
// @ts-ignore
export const theme = createTheme(DEFAULT_THEME);
