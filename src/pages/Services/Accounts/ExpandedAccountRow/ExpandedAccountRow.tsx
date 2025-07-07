import { FC, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { IAccount } from 'types/accounts';

import { AttentionIcon, SuccessIcon, CopyIcon } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import { StyledExpandedAccountRow } from './ExpandedAccountRow.styles';

interface IExpandedAccountRowProps {
  data: IAccount;
}

const ExpandedAccountRow: FC<IExpandedAccountRowProps> = ({ data }) => {
  const OpenAccountHeaders = [
    { label: 'Номер счета', value: data.accountNumber },
    { label: 'Дата создания', value: data.createDate?.day },
    { label: 'Терминал', value: 'ECOM10012' },
    { label: 'Шлюз', value: 'ECOM10012' },
    { label: 'Описание', value: 'Описание платежа' },
    { label: 'Сумма', value: `${data.sumPrice} ₽` },
    { label: 'Тип оплаты', value: 'Двухстадийная' },
    { label: 'Оплатить до', value: data.payDate?.day },
  ];

  const paymentInfo = {
    comission: data.payment?.comissionValue ? 'Оплачено 15 ₽' : 'Не оплачена',
    persent: data.payment?.percentValue
      ? `Оплачено ${Math.ceil(data.payment.percentValue)} ₽`
      : 'Не оплачены',
  };

  const link = 'http://localhost:3000' + data.link;

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(`http://localhost:3000${data.link}`);
  }, [data.link]);

  return (
    <StyledExpandedAccountRow className="expanded-account">
      <div className="expanded-account">
        <div className="expanded-account__contaner-link-info">
          <p className="expanded-account__title">Информация о платежной ссылке</p>
          <div className="expanded-account__status-container">
            {data.statusValue ? (
              <>
                <SuccessIcon className="expanded-account__icon" />
                <p className="expanded-account__status-txt">Оплачен</p>
              </>
            ) : (
              <>
                <AttentionIcon className="account__icon" />
                <p className="expanded-account__status-txt">Ожидает оплаты</p>
              </>
            )}
          </div>
          <div className="expanded-account__info-container">
            {OpenAccountHeaders.map(({ label, value }) => (
              <div key={label} className="expanded-account__container">
                <p className="expanded-account__info-txt">{label}</p>
                <p className="expanded-account__data-txt">{value}</p>
              </div>
            ))}
            {data.statusValue && (
              <>
                <div className="expanded-account__container">
                  <p className="expanded-account__info-txt">Комиссия</p>
                  <p className="expanded-account__data-txt">
                    {paymentInfo.comission}
                  </p>
                </div>
                <div className="expanded-account__container">
                  <p className="expanded-account__info-txt">Чаевые</p>
                  <p className="expanded-account__data-txt">
                    {paymentInfo.persent}
                  </p>
                </div>
              </>
            )}
            <div className="expanded-account__container">
              <p className="expanded-account__info-txt">
                Ссылка на оплату и QR-код
              </p>
              <NavLink
                to={data.link}
                state={{
                  sum: data.sumPrice,
                  number: data.accountNumber,
                  status: data.statusValue,
                }}
                className="expanded-account__link"
              >
                {link}
              </NavLink>
              <AppBtn
                className="expanded-account__copy-btn"
                filling="none"
                RightIcon={CopyIcon}
                onClick={handleCopyLink}
              />
            </div>
          </div>
        </div>

        <div className="expanded-account__container-box">
          <p className="expanded-account__title">Информация о покупателе</p>
          <div className="expanded-account__container">
            <p className="expanded-account__info-txt-user">ФИО</p>
            <p className="expanded-account__data-txt-user">Игорь Петров</p>
          </div>
          <div className="expanded-account__container">
            <p className="expanded-account__info-txt-user">E-mail</p>
            <p className="expanded-account__data-txt">vadim_mywork@mail.ru</p>
          </div>
        </div>

        <div className="expanded-account__container-box">
          <p className="expanded-account__title">Позиции чека</p>
          {data.items.map((item, index) => (
            <div
              key={`${item.position}-${index}`}
              className="expanded-account__container-positions"
            >
              <p className="expanded-account__data-txt-positions">
                {item.position}
              </p>
              <p className="expanded-account__data-txt-positions">
                {item.quantity}
              </p>
              <p className="expanded-account__data-txt-positions">{item.type}</p>
              <p className="expanded-account__data-txt-positions">{item.price} ₽</p>
              <p className="expanded-account__info-txt-positions">
                в т.ч. {item.tax}
              </p>
              <p className="expanded-account__info-txt-positions">{item.method}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledExpandedAccountRow>
  );
};

export default ExpandedAccountRow;
