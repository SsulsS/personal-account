import { FC } from 'react';

import { IAccount } from 'types/billCreation';

interface IAccountItemProps {
  item: IAccount;
}

const AccountItem: FC<IAccountItemProps> = ({ item }) => {
  const paymentValue = item.price * (item.methodValue / 100);
  const taxValue = (item.price * (item.taxValue / 100)).toFixed(2);

  return (
    <div className="accounts-container__container">
      <p className="accounts-container__txt">{item?.position}</p>

      <div className="accounts-container__txt-container">
        <p className="accounts-container__txt text-blur">
          Количество
        </p>
        <p className="accounts-container__txt">
          {item?.quantity} {item?.type}
        </p>
      </div>

      <p className="accounts-container__txt text-blur">
        {item?.tax}
      </p>

      <div className="accounts-container__txt-container">
        <p className="accounts-container__txt text-blur">
          Цена за единицу
        </p>
        <p className="accounts-container__txt accounts-container__txt-price">
          {item?.price}
        </p>
      </div>

      <div className="accounts-container__txt-container accounts-container__txt-container-method">
        <p className="accounts-container__txt text-blur">
          {item?.method}
        </p>
        <p>{paymentValue}</p>
      </div>

      <p className="accounts-container__txt accounts-container__txt-tax">
        {taxValue}
      </p>
    </div>
  );
};

export default AccountItem;
