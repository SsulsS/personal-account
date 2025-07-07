import { FC } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { CrossIcon } from 'assets/icons';

import { IAppBtnProps } from 'ui-kit/app-btns/AppBtn/AppBtn';

import { StyledAppCrossBtn } from './AppCrossBtn.styles';

interface IAppCrossBtnProps extends IAppBtnProps {}

const AppCrossBtn: FC<IAppCrossBtnProps> = ({ className, ...rest }) => {
  return (
    <StyledAppCrossBtn
      filling="none"
      className={joinClasses('close-btn', className)}
      RightIcon={CrossIcon}
      type="button"
      {...rest}
    />
  );
};

export default AppCrossBtn;
