import { css } from '@emotion/react';
import styled from '@emotion/styled';

import ratingIconActive from 'assets/icons/rating-icon-active.svg';
import ratingIconInactive from 'assets/icons/rating-icon-inactive.svg';

export const StyledRating = styled.div(
  ({ theme }) => css`
    z-index: 2;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;

    .star {
      &__input {
        display: none;
      }

      &__label {
        float: right;
        padding: 5px;
        transition: all 0.2s;
      }

      &__label:before {
        content: '';
        background: url(${ratingIconInactive});
        display: block;
        width: 30px;
        height: 30px;
      }

      &__input:checked ~ .star__label:before {
        content: '';
        background: url(${ratingIconActive});
        transition: all 0.25s;
      }

      @media (any-hover: hover) {
        &__label:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
  `
);
