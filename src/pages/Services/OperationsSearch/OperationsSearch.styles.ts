import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledOperationsSearch = styled.form(
  ({ theme }) => css`
    width: 50%;

    .operations-search {
      &__input {
        padding-top: 0;

        .app-input {
          &__input {
            padding-left: 20px;
            padding-right: 20px;
          }

          &__input-box {
            border-radius: 5em;
          }

          &__input::placeholder,
          &__left-el,
          &__right-el {
            visibility: revert;
            opacity: revert;
            transform: revert;
            padding: 0;
          }
        }
      }

      &__criteria-select {
        width: 165px;

        .select {
          &__control {
            position: relative;
            border: none;
            border-radius: 5em 0 0 5em;
            padding: 1px 6px 1px 20px;
            box-shadow: none;

            &--is-focused {
              border: none;
            }

            &--menu-is-open {
              border: none;
            }

            @media (any-hover: hover) {
              &:not(&--is-focused):hover {
                border: none;
              }

              &--is-focused:hover {
                border: none;
              }
            }

            &::after {
              content: '';
              height: 18px;
              width: 1px;
              background-color: ${theme.palette.background.line};
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }

          &__single-value {
            overflow: revert;
            text-overflow: revert;
            white-space: revert;
            text-align: center;
            text-wrap: balance;
          }
        }
      }

      &__btn {
        height: 100%;
      }
    }
  `
);
