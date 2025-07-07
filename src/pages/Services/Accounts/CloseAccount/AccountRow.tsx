import { FC, useState } from 'react';

import { IAccount } from 'types/accounts';

import { ArrowDownThinIcon, AttentionIcon, SuccessIcon } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import ExpandedAccountRow from 'pages/Services/Accounts/ExpandedAccountRow/ExpandedAccountRow';

import { StyledAccountRow } from './AccountRow.styles';

interface IAccountRowProps {
  data: IAccount;
}

const AccountRow: FC<IAccountRowProps> = ({ data }) => {
  const [isAccountExpanded, setIsAccountExpanded] = useState(false);

  return (
    <StyledAccountRow className="account-row">
      <div className="account-row__account-row">
        <p className="account-row__number">{data.accountNumber}</p>
        <div className="account-row__date-container">
          <p className="account-row__date-txt-day">{data.createDate?.day}</p>
          <p className="account-row__date-txt-time">{data.createDate?.time}</p>
        </div>
        <p className="account-row__price">{data.sumPrice} ₽</p>
        <div className="account-row__date-container">
          <p className="account-row__date-txt-day">{data.payDate?.day}</p>
          <p className="account-row__date-txt-time">{data.payDate?.time}</p>
          {data.statusValue ? (
            <SuccessIcon className="account-row__icon" />
          ) : (
            <AttentionIcon className="account-row__icon" />
          )}
        </div>
        <div className="account-row__status">
          {data.statusValue ? (
            <>
              <SuccessIcon className="account-row__icon" />
              <p className="account-row__status-txt">Оплачен</p>
            </>
          ) : (
            <>
              <AttentionIcon className="account-row__icon" />
              <p className="account-row__status-txt">Ожидает оплаты</p>
            </>
          )}
        </div>
        <AppBtn
          className="account-row__open-btn"
          RightIcon={ArrowDownThinIcon}
          filling="none"
          onClick={() => setIsAccountExpanded((prev) => !prev)}
        />
      </div>

      {isAccountExpanded && <ExpandedAccountRow data={data} />}
    </StyledAccountRow>
  );
};

export default AccountRow;
