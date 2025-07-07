import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TCurrencyPosition } from 'types/general';

import { IAppAmountInputProps } from './AppAmountInput';

interface IStyledAppAmountInputProps
  extends Pick<
    IAppAmountInputProps,
    'disabled' | 'isValid' | 'errCssMinHeight' | 'label' | 'errText'
  > {
  currencyPosition: TCurrencyPosition;
  isLabelRaised: boolean;
}

export const StyledAppAmountInput = styled.div<IStyledAppAmountInputProps>(
  ({
    theme,
    disabled,
    isValid,
    currencyPosition,
    errText,
    errCssMinHeight,
    label,
    isLabelRaised,
  }) => {
    const isInvalidInput = Boolean(!isValid || errText);

    return css`
      isolation: isolate;
      padding-top: 9px;
      font-size: 14px;
      width: 100%;
      color: ${theme.palette.text.primary};
      pointer-events: ${disabled && 'none'};

      .app-amount-input {
        &__input-wrapper {
          cursor: text;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: start;
          padding: 15px;
          background-color: ${theme.palette.background.primary};
          border-width: 1px;
          border-style: solid;
          border-color: ${!isInvalidInput
            ? theme.palette.background.line
            : theme.palette.error.main};
          border-radius: 10px;
          transition: border-color ${theme.transitions.duration.shortest}ms
            ease-out;

          ${{
            left: css`
              flex-direction: row-reverse;
              column-gap: 0.2em;
            `,
            right: css`
              column-gap: 0.3em;
            `,
          }[currencyPosition]}

          &:focus-within {
            outline: none;
            border-color: ${!isInvalidInput
              ? theme.palette.controls.focus
              : theme.palette.error.main};
          }
        }

        &__label {
          display: block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 12px;
          padding: 1px 3px;
          border-radius: 3px;
          background-color: ${theme.palette.background.primary};
          z-index: 1;
          max-width: 80%;
          font-size: 14px;
          color: ${theme.palette.text.tertiary};
          cursor: text;
          transition: all ${theme.transitions.duration.shortest}ms ease-out;
        }

        &__sized-box {
          display: inline-grid;
          align-items: center;
        }

        &__input {
          border: none;
          outline: none;
          text-align: right;
          display: block;
          padding: 0;
          color: inherit;
        }

        &__input::-webkit-outer-spin-button,
        &__input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &__input[type='number'] {
          -moz-appearance: textfield;
        }

        &__invisible-amount,
        &__input {
          grid-area: 1/-1;
          font: inherit;
        }

        &__invisible-amount {
          visibility: hidden;
          white-space: pre-wrap;
          width: min-content;
          display: block;
        }

        &__currency {
          display: block;
          font: inherit;
          color: inherit;
        }

        &__sized-box,
        &__currency {
          transition-property: color, opacity, transform;
          transition-duration: ${theme.transitions.duration.shortest}ms;
          transition-timing-function: ease-out;
        }

        ${isLabelRaised || !label
          ? css`
              &__label {
                font-size: 12px;
                top: 0;
              }

              &__sized-box,
              &__currency {
                opacity: 1;
                transform: translateY(0);
              }
            `
          : css`
              &__sized-box,
              &__currency {
                opacity: 0;
                transform: translateY(100%);
              }
            `}

        &__input::placeholder,
        &__currency_empty-amount {
          opacity: 1;
          color: ${theme.palette.text.tertiary};
        }

        &__err {
          color: ${theme.palette.text.error};
          min-height: ${errCssMinHeight || 0};
          font-size: 12px;
          text-wrap: balance;
        }
      }

      ${disabled &&
      css`
        .app-amount-input {
          &__input-wrapper {
            border-color: ${theme.palette.background.line};
            background-color: ${theme.palette.background.neutral};
            color: ${theme.palette.text.disabled};
          }

          &__label {
            background-color: transparent;
          }

          &__input:placeholder-shown {
            opacity: 0;
          }
        }
      `}
    `;
  }
);
