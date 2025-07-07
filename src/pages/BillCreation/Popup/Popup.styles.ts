import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledPopup = styled.div(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    z-index: 5;

    .popup {
      &__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${theme.palette.controls.focus};
        opacity: 0.2;
      }

      &__content {
        left: 500px;
        top: 250px;
        position: absolute;
        padding: 40px 80px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 14px;
        background-color: ${theme.palette.background.primary};
      }

      &__title {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;
      }

      &__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid ${theme.palette.background.line};
        border-radius: 14px;
        padding: 10px 20px;
        margin-bottom: 20px;
        gap: 10px;
      }

      &__txt {
        font-size: 14px;
        font-weight: 400;
      }

      &__price-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      &__btn-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }

      &__btn {
        flex-grow: 1;
      }
    }
  `
);
