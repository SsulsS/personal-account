import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IAppSwitchProps } from './AppSwitch';

export const StyledAppSwitch = styled.div<Pick<IAppSwitchProps, 'height'>>(
  ({ theme, height = 20 }) => css`
    display: flex;
    align-items: center;
    font-size: 20px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    border-radius: 3em;

    .app-switch {
      &__label {
        cursor: pointer;
        padding-left: 0.3em;
      }

      &__switcher {
        position: relative;
        font-size: inherit;
        appearance: none;
        height: ${height}px;
        width: ${(height / 10) * 18}px;
        margin: 0;
        border-radius: 3em;
        background-color: ${theme.palette.controls.dark};
        border: 1px solid ${theme.palette.controls.dark};
        transition-property: background-color, border;
        transition-duration: ${theme.transitions.duration.shortest}ms;
        transition-timing-function: ease-out;
        cursor: pointer;

        @media (any-hover: hover) {
          &:hover {
            background-color: ${theme.palette.controls.selected};
            border: 1px solid ${theme.palette.controls.selected};
          }

          &:checked:hover {
            background-color: ${theme.palette.primary.light};
            border: 1px solid ${theme.palette.primary.light};
          }
        }

        &::before {
          content: '';
          display: block;
          position: absolute;
          left: 2px;
          top: 2px;
          bottom: 2px;
          aspect-ratio: 1;
          border-radius: 50%;
          background-color: ${theme.palette.background.primary};
          box-shadow: 0px 2px 4px #0000001f;
          transition: left ${theme.transitions.duration.shortest}ms ease-out;
        }
      }

      &__switcher:checked {
        background-color: ${theme.palette.primary.main};
        border: 1px solid ${theme.palette.background.line};

        &::before {
          left: calc(100% - 1em + 4px);
        }
      }

      &__switcher:disabled {
        pointer-events: none;
        background-color: ${theme.palette.background.neutral};
        border: 1px solid ${theme.palette.background.neutral};

        & + label {
          pointer-events: none;
        }
      }

      &__switcher:disabled:checked {
        &::before {
          left: calc(100% - 1em + 4px);
        }
      }
    }
  `
);
