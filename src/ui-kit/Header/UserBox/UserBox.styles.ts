import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledUserBox = styled.div(
  ({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    column-gap: 10px;
    justify-items: start;
    cursor: pointer;

    &::before {
      position: absolute;
      bottom: -26px;
      left: -10px;
      right: -10px;
      height: 2px;
      background-image: ${theme.palette.gradient.main};
    }

    .user-box {
      &__img {
        height: 56px;
        width: 56px;
        border-radius: 50%;
        object-fit: cover;
        grid-row: span 2;
        box-shadow: 0 2px 8px rgba(55, 172, 222, 0.10);
        background: #fff;
        border: 2px solid #B6E6F9;
        transition: height 0.2s, width 0.2s;
      }

      &__name {
        font-weight: 600;
        font-size: 16px;
        color: ${theme.palette.text.secondary};
      }

      &__btn {
        padding: 2px;
      }

      &__role {
        font-size: 12px;
        color: ${theme.palette.text.tertiary};
        grid-column: span 2;
      }
    }

    @media (max-width: ${theme.breakpoints.values.sm}px) {
      &::before {
        bottom: -15px;
      }
    }

    @media (any-hover: hover) {
      &:hover .app-dropdown-btn {
        background-color: ${theme.palette.primary.lighter};
      }
    }
  `
);
