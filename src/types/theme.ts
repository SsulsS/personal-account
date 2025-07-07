/* eslint-disable @typescript-eslint/naming-convention */
import { Theme as MuiTheme } from '@mui/material/styles';

import { BASE_THEME } from 'styles/theme';

export interface IPalette {
  primary: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };
  secondary: {
    light: string;
    main: string;
    dark: string;
  };
  error: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };
  warning: {
    lighter: string; // уточнить что за цвет, его нет у нас в палитре
    main: string;
  };
  info: {
    main: string;
  };
  success: {
    light: string;
    main: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    invertedPrimary: string;
    accent: string;
    error: string;
    success: string;
    disabled: string;
  };
  background: {
    primary: string;
    secondary: string;
    neutral: string;
    line: string;
    overlay: string;
  };
  controls: {
    dark: string;
    selected: string;
    disabled: string;
    focus: string;
  };
  gradient: {
    light: string;
    main: string;
  };

  // возможно в extra необходимо распределить эти цвета отсюда
  operationHistory: {
    created: string;
    awaited: string;
    partiallyCompleted: string;
    completed: string;
    sent: string;
    refunded: string;
    err: string;
  };
}

export type TShadows = ['none', string, string, string];

type TBaseTheme = typeof BASE_THEME;

export interface ITheme extends TBaseTheme {
  palette: IPalette;
  shadows: TShadows;
}

declare module '@mui/material/styles' {
  interface Theme extends ITheme {}
  interface ThemeOptions extends ITheme {}
}
declare module '@emotion/react' {
  interface Theme extends ITheme, MuiTheme {}
}
