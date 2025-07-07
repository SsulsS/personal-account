import { FC, HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

import { joinClasses } from 'utils/joinClasses';

import { SignOutIcon } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import { StyledUserBox } from './UserBox.styles';

interface IUserBoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  avatar?: string;
  isMenuOpened?: boolean;
  name?: string;
  role?: string;
}

const UserBox: FC<IUserBoxProps> = ({
  className,
  avatar,
  isMenuOpened,
  name,
  role,
  ...rest
}) => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('jwt');
    navigate('/sign-in');
  };

  return (
    <StyledUserBox className={joinClasses('user-box', className)} {...rest}>
      <img src={avatar} alt="Аватар" className="user-box__img" />

      <p className="user-box__name">{name || 'user'}</p>

      <AppBtn
        filling="none"
        RightIcon={SignOutIcon}
        className="user-box__btn"
        onClick={signOut}
      />

      <p className="user-box__role">{role || 'active'}</p>
    </StyledUserBox>
  );
};

export default UserBox;
