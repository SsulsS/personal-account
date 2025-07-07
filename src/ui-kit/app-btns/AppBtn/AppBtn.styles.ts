import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { IAppBtnProps } from './AppBtn';

export const StyledAppBtn = styled.button<
  Pick<IAppBtnProps, 'filling' | 'iconHeight'>
>(({ theme, filling, iconHeight }) => {
  const getFillingStyles = () => {
    switch (filling) {
      case 'filled':
        return css`
          background-color: ${theme.palette.primary.main};
          border: 1px solid ${theme.palette.primary.main};
          color: ${theme.palette.text.invertedPrimary};

          @media (any-hover: hover) {
            &:hover {
              background-color: ${theme.palette.primary.light};
              border: 1px solid ${theme.palette.primary.light};
            }
          }

          &:active {
            background-color: ${theme.palette.primary.dark};
            border: 1px solid ${theme.palette.primary.dark};
          }

          &:disabled {
            color: ${theme.palette.text.disabled};
            background-color: ${theme.palette.controls.disabled};
            border: 1px solid ${theme.palette.controls.disabled};
          }
        `;

      case 'border':
        return css`
          background-color: transparent;
          border: 1px solid ${theme.palette.primary.main};
          color: ${theme.palette.text.accent};

          @media (any-hover: hover) {
            &:hover {
              background-color: ${theme.palette.primary.lighter};
            }
          }

          &:active {
            background-color: ${theme.palette.controls.selected};
          }

          &:disabled {
            color: ${theme.palette.text.disabled};
            border: 1px solid ${theme.palette.controls.disabled};
          }
        `;

      case 'none':
        return css`
          background-color: transparent;
          border: 1px solid transparent;
          color: ${theme.palette.text.accent};

          @media (any-hover: hover) {
            &:hover {
              background-color: ${theme.palette.primary.lighter};
            }
          }

          &:active {
            background-color: ${theme.palette.controls.selected};
          }

          &:disabled {
            color: ${theme.palette.text.disabled};
          }
        `;

      case 'ascetic':
        return css`
          background-color: transparent;
          border: 1px solid transparent;
          color: ${theme.palette.text.accent};

          @media (any-hover: hover) {
            &&:hover {
              color: ${theme.palette.primary.light};
            }
          }

          &&:active {
            color: ${theme.palette.primary.dark};
          }

          &&:disabled {
            color: ${theme.palette.text.disabled};
          }
        `;

      default:
        return null;
    }
  };

  const getSpinnerBackground = (filling: IAppBtnProps['filling']) => {
    switch (filling) {
      case 'filled':
        return theme.palette.controls.disabled;
      case 'border':
        return theme.palette.controls.disabled;
      case 'none':
        return theme.palette.background.primary;
      case 'ascetic':
        return theme.palette.background.primary;
    }
  };

  return css`
    position: relative;
    padding: ${filling === 'ascetic' ? '9px 0' : '9px 20px'};
    font-size: 16px;
    border-radius: 3em;
    display: flex;
    column-gap: 8px;
    justify-content: center;
    align-items: center;
    transition-property: background-color, border, color, transform;
    transition-timing-function: ease-out;
    transition-duration: ${theme.transitions.duration.shortest}ms;
    -webkit-tap-highlight-color: transparent;
    user-select: none;

    &:disabled {
      pointer-events: none;
    }

    ${getFillingStyles()}

    .app-btn {
      &__icon {
        width: auto;
        height: ${iconHeight ? `${iconHeight}px` : 'calc(1em * 1.25)'};
        display: block;
        flex-shrink: 0;
      }

      &__icon *[stroke] {
        stroke: currentColor;
      }

      &__icon *[fill] {
        fill: currentColor;
      }

      &__spinner {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 3em;
        background-color: ${getSpinnerBackground(filling)};
      }
    }
  `;
});
