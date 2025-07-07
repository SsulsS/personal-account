import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledProfile = styled.div(
  ({ theme }) => css`
    width: 100%;
    border-radius: 14px;
    background-color: ${theme.palette.background.secondary};
    box-shadow: ${theme.shadows[3]};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 88px;

    .profile {
      &__background {
        position: absolute;
        width: 100%;
        top: 0;
      }

      &__background-image {
        object-fit: fill;
        border-radius: 14px;
        width: 100%;
      }

      &__content {
        position: relative;
        width: 100%;
        padding: 57px 12px 12px;
        border-radius: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${theme.palette.background.secondary};
      }

      &__avatar {
        position: absolute;
        top: -75px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 4px 24px rgba(55, 172, 222, 0.15);
        border: 3px solid #B6E6F9;
        background: #fff;
        transition: width 0.2s, height 0.2s;
      }

      &__name {
        margin-bottom: 2px;
        color: ${theme.palette.text.primary};
        font-size: 16px;
        font-weight: 600;
      }

      &__description {
        color: ${theme.palette.text.secondary};
        text-align: center;
        font-size: 14px;
        margin-bottom: 9px;
      }

      &__restaurant-name {
        margin-bottom: 15px;
        padding: 2px 8px;
        border: 1px solid ${theme.palette.background.neutral};
        border-radius: 20px;
        color: ${theme.palette.text.secondary};
        text-decoration: none;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        transition: opacity 0.5s ease 0s;
      }

      &__tips-container {
        display: flex;
        gap: 8px;
        margin-bottom: 24px;
      }

      &__feedback-btn {
        color: ${theme.palette.controls.focus};
        font-size: 14px;
        font-weight: 600;
      }

      &__tips-container {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin-bottom: 25px;
      }

      &__textarea-container {
        position: relative;
        margin-top: 10px;
      }

      &__tips-input {
        width: 70%;
        padding: 0;
        .app-amount-input__input-wrapper {
          background: inherit;
        }
      }

      &__tips-accept-btn {
        position: absolute;
        padding: 5px;
        background-color: ${theme.palette.background.line};
        right: 60px;
      }

      &__tips-clear-btn {
        position: absolute;
        right: 100px;
        padding: 5px;
        color: ${theme.palette.text.tertiary};
      }

      &__feedback-clear-btn {
        top: 10px;
        right: -35px;
      }

      &__textarea {
        border: 1px solid ${theme.palette.background.line};
        border-radius: 10px;
        padding: 9px 0 0 6px;
        resize: none;
        width: 200px;
        height: 100px;
        margin-top: 10px;
        color: inherit;
        color: ${theme.palette.text.primary};
      }

      &__textarea:focus {
        outline: none;
        border: 1px solid ${theme.palette.controls.focus};
      }

      @media (any-hover: hover) {
        &__restaurant-name:hover {
          opacity: 0.8;
        }

        &__tips-accept-btn:hover {
          opacity: 0.7;
        }
      }
    }
  `
);
