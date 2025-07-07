import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { INavMenuProps } from './NavMenu';

export const StyledNavMenu = styled.nav<Pick<INavMenuProps, 'variant'>>(
  ({ theme, variant }) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'desktop':
          return css`
            justify-content: center;

            & > ul {
              flex-direction: row;
              justify-self: center;
              column-gap: 30px;
            }

            .nav-menu__link {
              font-size: 16px;
            }
          `;

        case 'mobile':
          return css`
            & > ul {
              flex-direction: column;
              align-items: center;
            }

            .nav-menu__link {
              font-size: 14px;
            }
          `;
      }
    };

    return css`
      display: flex;

      & > ul {
        display: flex;
      }

      .nav-menu {
        &__link {
          display: block;
          padding: 10px;
          color: ${theme.palette.text.secondary};
          text-decoration: none;
          border-radius: 3em;
          -webkit-tap-highlight-color: transparent;
          transition: color ${theme.transitions.duration.shortest}ms ease-out;
          font-weight: 500;

          &.active {
            color: ${theme.palette.text.accent};
            pointer-events: none;
          }

          @media (any-hover: hover) {
            &:hover {
              color: ${theme.palette.primary.light};
            }
          }

          &:active {
            color: ${theme.palette.primary.dark};
          }

          &_disabled {
            pointer-events: none;
            color: ${theme.palette.text.disabled};
          }
        }
      }

      ${getVariantStyles()}
    `;
  }
);
