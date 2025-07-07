import { ROUTES } from 'constants/general';

import logo from 'assets/images/LOGO-LK.png';
import avatar from 'assets/images/avatar.png';

import { StyledHeader } from './Header.styles';
import NavMenu from './NavMenu/NavMenu';
import UserBox from './UserBox/UserBox';

const Header = () => {
  const menuLinks = [
    { path: ROUTES.services, label: 'Операции', isVisible: true },
    { path: ROUTES.billCreation, label: 'Выставление счета', isVisible: true }, //Пока так, потом просто встанет нужная страница
  ];

  return (
    <StyledHeader className="header">
      <div className="header__container">
        <img src={logo} alt="Логотип" className="header__logo" />

        <NavMenu links={menuLinks} variant="desktop" />

        <UserBox avatar={avatar} name="Игорь Петров" role="Владелец" />
      </div>
    </StyledHeader>
  );
};

export default Header;
