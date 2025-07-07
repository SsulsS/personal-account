import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { joinClasses } from 'utils/joinClasses';

import { StyledNavMenu } from './NavMenu.styles';

export interface INavMenuProps {
  links: {
    path: string;
    label: string;
    disabled?: boolean;
    isVisible?: boolean;
  }[];
  className?: string;
  variant: 'mobile' | 'desktop';
}

const NavMenu: FC<INavMenuProps> = ({ links, className, variant }) => {
  return (
    <StyledNavMenu
      className={joinClasses('nav-menu', className)}
      variant={variant}
    >
      <ul>
        {links.map((link) => {
          const linkKey = link.label;

          return (
            link.isVisible && (
              <li key={link.path}>
                {link.disabled ? (
                  <p className="nav-menu__link nav-menu__link_disabled">
                    {linkKey}
                  </p>
                ) : (
                  <NavLink className="nav-menu__link" to={link.path}>
                    {linkKey}
                  </NavLink>
                )}
              </li>
            )
          );
        })}
      </ul>
    </StyledNavMenu>
  );
};

export default NavMenu;
