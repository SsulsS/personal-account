import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledPaymentCreation = styled.div(
  ({ theme }) => css`
    padding: 35px 16px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    background-color: ${theme.palette.background.secondary};
    box-shadow: ${theme.shadows[3]};
    display: flex;

    .payment-creation {
      &__pay-btn {
        width: 100%;
        height: 51px;
        color: ${theme.palette.text.invertedPrimary};
        background-color: ${theme.palette.controls.focus};
        border-radius: 14px;
        font-size: 18px;
        font-weight: 600;
      }

      &__pay-btn:disabled {
        color: ${theme.palette.text.disabled};
        background-color: ${theme.palette.background.neutral};
      }

      @media (any-hover: hover) {
        &__pay-btn:hover {
          opacity: 0.8;
        }
      }
    }
  `
);
