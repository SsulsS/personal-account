import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IAppCheckboxProps } from './AppCheckbox';

interface IStyledAppCheckboxProps
  extends Pick<IAppCheckboxProps, 'disabled' | 'checked' | 'isIndeterminate'> {}

export const StyledAppCheckbox = styled.label<IStyledAppCheckboxProps>(
  ({ theme, disabled, checked, isIndeterminate }) => css`
    display: flex;
    column-gap: 10px;
    align-items: center;
    font-size: 14px;
    color: ${theme.palette.text.primary};
    -webkit-tap-highlight-color: transparent;
    border-radius: 3px;
    max-width: fit-content;
    cursor: pointer;
    pointer-events: ${disabled && 'none'};

    @media (any-hover: hover) {
      &:hover .app-checkbox__checkbox {
        ${checked || isIndeterminate
          ? css`
              background-color: ${theme.palette.primary.light};
              border-color: ${theme.palette.primary.light};
            `
          : css`
              border-color: ${theme.palette.primary.light};
            `}
      }
    }

    .app-checkbox {
      &__checkbox {
        appearance: none;
        width: calc(1em * 1.3);
        height: calc(1em * 1.3);
        border-radius: 3px;
        background-color: ${theme.palette.background.neutral};
        border: 2px solid ${theme.palette.controls.dark};
        z-index: 0;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-property: background-color, border, opacity;
        transition-duration: ${theme.transitions.duration.shortest}ms;
        transition-timing-function: ease-out;
        cursor: inherit;

        & + .app-checkbox__label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        ${checked &&
        css`
          background-color: ${theme.palette.controls.focus};
          border-color: ${theme.palette.controls.focus};
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 14 14'%3E%3Cpath stroke='%23F6F9FA' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m11.667 4.084-6.416 6.417-2.917-2.917'/%3E%3C/svg%3E");
          background-position: center;
          background-repeat: no-repeat;
          background-size: calc(100% - 4px);
        `}

        ${isIndeterminate &&
        css`
          background-color: ${theme.palette.primary.main};
          border-color: ${theme.palette.primary.main};

          &::before {
            content: '';
            z-index: 1;
            width: calc(100% - 6px);
            height: 2px;
            border-radius: 2px;
            background-color: ${theme.palette.background.primary};
            opacity: 1;
          }
        `}

        ${disabled &&
        css`
          background-color: ${theme.palette.background.line};
          border-color: ${theme.palette.background.line};

          & + .app-checkbox__label {
            color: ${theme.palette.text.disabled};
          }
        `}

        ${disabled &&
        checked &&
        css`
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 14 14'%3E%3Cpath stroke='%23CDCADC' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m11.667 4.084-6.416 6.417-2.917-2.917'/%3E%3C/svg%3E");
        `}

        ${disabled &&
        isIndeterminate &&
        css`
          &::before {
            background-color: ${theme.palette.text.disabled};
          }
        `}
      }
    }
  `
);
