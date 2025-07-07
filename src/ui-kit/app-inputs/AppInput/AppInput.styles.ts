import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IAppInputProps } from './AppInput';

interface IStyledAppInputProps
  extends Pick<
    IAppInputProps,
    'errCssMinHeight' | 'type' | 'errText' | 'isValid' | 'iconSize' | 'disabled'
  > {
  isPassVisible: boolean;
  isLabelRaised: boolean;
}

export const StyledAppInput = styled.div<IStyledAppInputProps>`
  ${({
    theme,
    errCssMinHeight,
    isPassVisible,
    isLabelRaised,
    errText,
    type,
    isValid,
    iconSize = 24,
    disabled,
  }) => {
    const isPassDotsVisible: boolean = type === 'password' && !isPassVisible;
    const isInvalidInput = Boolean(!isValid || errText);
    const isEmptyInputDisabled = disabled && !isLabelRaised;

    return css`
      padding-top: 9px;

      .app-input {
        &__input-wrapper {
          display: flex;
          column-gap: 8px;
          align-items: center;
        }

        &__input-box {
          width: 100%;
          position: relative;
          z-index: 0;
          display: flex;
          font-size: 14px;
          color: ${theme.palette.text.primary};
          background-color: ${theme.palette.background.primary};
          border: 1px solid
            ${isInvalidInput
              ? theme.palette.error.main
              : theme.palette.background.line};
          border-radius: 10px;
          cursor: ${!disabled && 'text'};
          transition: border-color ${theme.transitions.duration.shortest}ms
            ease-out;
        }

        &__input-box:focus-within {
          border-color: ${isInvalidInput
            ? theme.palette.error.main
            : theme.palette.controls.focus};
        }

        &__label {
          pointer-events: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 12px;
          padding: 1px 3px;
          border-radius: 3px;
          background-color: ${isEmptyInputDisabled
            ? 'transparent'
            : theme.palette.background.primary};
          z-index: 1;
          max-width: 90%;
          font-size: 14px;
          color: ${theme.palette.text.tertiary};
          cursor: text;
          transition: all ${theme.transitions.duration.shortest}ms ease-out;
        }

        &__left-el {
          padding-left: 15px;
        }

        &__right-el {
          padding-right: 15px;
        }

        &__left-el,
        &__right-el {
          display: flex;
          align-items: center;
          font: inherit;
          flex-shrink: 0;
          column-gap: 3px;
        }

        &__input {
          width: 100%;
          margin: 10px 0;
          padding: 4px 0;
          font: inherit;
          outline: none;
          background-color: transparent;

          &:not(:placeholder-shown) {
            ${isPassDotsVisible &&
            css`
              font-weight: 900;
              letter-spacing: 0.35em;
            `}
          }
        }

        &__input::-webkit-outer-spin-button,
        &__input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &__input[type='number'] {
          -moz-appearance: textfield;
        }

        &__input::placeholder {
          color: ${theme.palette.text.tertiary};
        }

        &__err {
          color: ${theme.palette.text.error};
          min-height: ${errCssMinHeight};
          font-size: 12px;
        }

        &__clear-btn {
          padding: 3px;
          outline-offset: 0px;
        }

        &__eye-btn {
          padding: 4px;
          outline-offset: 0px;
        }

        &__eye-icon {
          width: ${iconSize}px;
          height: ${iconSize}px;
        }

        @media (any-hover: hover) {
          &__eye-btn:hover {
            background-color: ${theme.palette.primary.lighter};
          }
        }

        &__eye-btn:active {
          background-color: ${theme.palette.controls.selected};
        }

        &__input::placeholder,
        &__left-el,
        &__right-el {
          transition-property: opacity, transform, visibility;
          transition-duration: ${theme.transitions.duration.shortest}ms;
          transition-timing-function: ease-out;
        }

        ${isLabelRaised
          ? css`
              &__label {
                font-size: 12px;
                top: 0;
              }

              &__input::placeholder,
              &__left-el,
              &__right-el {
                visibility: visible;
                opacity: 1;
                transform: translateY(0);
              }
            `
          : css`
              &__input::placeholder,
              &__left-el,
              &__right-el {
                visibility: hidden;
                opacity: 0;
                transform: translateY(1em);
              }
            `}
      }

      ${disabled &&
      css`
        .app-input {
          &__input-box {
            border-color: ${theme.palette.background.line};
            background-color: ${theme.palette.background.neutral};
          }

          &__clear-btn {
            pointer-events: none;
            opacity: 0.2;
          }
        }
      `}
    `;
  }}
`;
