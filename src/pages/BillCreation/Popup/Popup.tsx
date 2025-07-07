import { FC } from 'react';

import { CopyIcon } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import { StyledPopup } from './Popup.styles';

interface IPopupProps {
  onClose: () => void;
}
const totalSum = 500;

const Popup: FC<IPopupProps> = ({ onClose }) => {
  const handleCopyLink = () => {
    const randomPath = Math.random().toString(36).substr(2, 9);
    navigator.clipboard.writeText(
      `http://localhost:3000/payments/${randomPath}`
    );
  };

  return (
    <StyledPopup>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <p className="popup__title">Счет успешно сформирован</p>
        <div className="popup__container">
          <p>Информация о счете</p>
          <div className="popup__price-container">
            <p className="popup__txt">Итоговая Сумма</p>
            <p className="popup__txt">{totalSum}</p>
          </div>
        </div>
        <div className="popup__btn-container">
          <AppBtn
            className="popup__btn"
            filling="none"
            RightIcon={CopyIcon}
            onClick={handleCopyLink}
          >
            Скопировать ссылку
          </AppBtn>
          <AppBtn className="popup__btn" onClick={onClose}>
            Закрыть
          </AppBtn>
        </div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
