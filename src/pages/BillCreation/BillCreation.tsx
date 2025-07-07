import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IAccount } from 'types/accounts';

import { ArrowLeftIcon, CartIcon, PlusIcon } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import { StyledBillCreation } from './BillCreation.styles';
import InputsContainer from './InputsContainer/InputsContainer';
import AccountsList from './AccountsList/AccountsList';
import Popup from './Popup/Popup';

const BillCreation = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [isOpenAddProduct, setIsOpenAddProduct] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <StyledBillCreation>
      <div className="create-account__wrapper">
        <AppBtn
          className="create-account__back-btn"
          filling="none"
          LeftIcon={ArrowLeftIcon}
          onClick={() => navigate('/services')}
        >
          К списку счетов
        </AppBtn>

        <p className="create-account__title">Формирование счета на оплату</p>

        <div className="create-account__container">
          <p className="create-account__tips-txt">Позиции чека</p>

          <div className="create-account__cart-container">
            {isOpenAddProduct ? (
              <InputsContainer setIsOpenAddProduct={setIsOpenAddProduct} />
            ) : (
              // @ts-ignore
              // На логике удалю, когда начну передавать норм данные, а не пустой массив
              <AccountsList accounts={accounts} />
            )}
            {!accounts.length && !isOpenAddProduct && (
              <>
                <CartIcon className="create-account__cart-icon" />
                <p className="create-account__cart-txt">Тут пока пусто</p>
              </>
            )}
          </div>

          <AppBtn
            className="create-account__add-btn"
            RightIcon={PlusIcon}
            onClick={() => setIsOpenAddProduct(true)}
          >
            Добавить товар/услугу
          </AppBtn>

          <div className="create-account__btn-container">
            <AppBtn className="create-account__clear-btn" filling="none">
              Очистить
            </AppBtn>
            <AppBtn
              className="create-account__pay-btn"
              onClick={() => setIsOpenPopup(true)}
            >
              Сформировать счет
            </AppBtn>
          </div>
        </div>
      </div>

      {isOpenPopup && <Popup onClose={() => setIsOpenPopup(false)} />}
    </StyledBillCreation>
  );
};

export default BillCreation;
