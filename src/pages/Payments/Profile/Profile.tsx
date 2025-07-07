import { FC, useEffect, useState } from 'react';

import { CheckMarkIcon, CrossIcon, FeedbackIcon } from 'assets/icons';
import avatar from 'assets/images/avatar.png';
import background from 'assets/images/avatar-background-lk.png';

import AppAmountInput from 'ui-kit/app-inputs/AppAmountInput/AppAmountInput';
import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import { tipsIds } from 'pages/Payments/constants';

import { StyledProfile } from './Profile.styles';
import Tips from './Tip/Tip';

import StarRating from '../Rating/Rating';

interface IProfileProps {
  amount: number;
  onFeedbackClick: () => void;
  isFeedbackOpen: boolean;
  isTipsDisabled: boolean;
  setPercentValue: (value: number) => void;
  feedback: string;
  setFeedback: (value: string) => void;
  setRating: (value: string) => void;
}

const Profile: FC<IProfileProps> = ({
  amount,
  onFeedbackClick,
  isFeedbackOpen,
  isTipsDisabled,
  setPercentValue,
  feedback,
  setFeedback,
  setRating,
}) => {
  const [selectedPercent, setSelectedPercent] = useState<number>(5);
  const [tipsInputValue, setTipsInputValue] = useState('');
  const [amountInputValue, setAmountInputValue] = useState(0);

  const getPriceValue = (item: string) => {
    return (amount * (parseFloat(item) / 100)).toFixed(0) + ' ₽';
  };

  const onClearTipsBtnClick = () => {
    setTipsInputValue('');
    setAmountInputValue(0);
  };

  useEffect(() => {
    if (!isTipsDisabled) {
      setPercentValue(0);
      return;
    }
    switch (true) {
      case selectedPercent === 5:
        setPercentValue(amount * 0.05);
        break;
      case selectedPercent === 10:
        setPercentValue(amount * 0.1);
        break;
      case selectedPercent === 15:
        setPercentValue(amount * 0.15);
        break;
      case selectedPercent === 0:
        setPercentValue(amountInputValue);
        break;
    }
  }, [selectedPercent, amountInputValue, isTipsDisabled]);

  return (
    <StyledProfile className="profile">
      <div className="profile__background">
        <img
          src={background}
          alt="Фон аватара"
          className="profile__background-image"
        />
      </div>

      <div className="profile__content">
        <img src={avatar} alt="Аватар профиля" className="profile__avatar" />
        <h1 className="profile__name">Игорь</h1>
        <p className="profile__description">Коплю на обслуживание Volkswagen</p>
        <a
          href="https://www.mamaroma.ru/dostavka/"
          target="_blank"
          className="profile__restaurant-name"
          rel="noreferrer"
        >
          МамаRoma
        </a>

        <div className="profile__tips-container">
          {tipsIds.map((item) => (
            <Tips
              key={item.id}
              disabled={isTipsDisabled}
              onChange={() => setSelectedPercent(Number(item.id))}
              id={item.id}
              percent={item.percent}
              price={item.id !== '0' && getPriceValue(item.percent)}
              tipSelected={selectedPercent}
            />
          ))}
        </div>
        {selectedPercent === 0 && isTipsDisabled && (
          <div className="profile__tips-container">
            <AppAmountInput
              className="profile__tips-input"
              placeholder=""
              currency="RUB"
              lang="ru"
              maxLength={5}
              value={tipsInputValue}
              onChange={(evt) =>
                setTipsInputValue(evt.target.value.replace(/[^0-9]/g, ''))
              }
            />

            {tipsInputValue && (
              <>
                <AppBtn
                  className="profile__tips-clear-btn"
                  onClick={onClearTipsBtnClick}
                  RightIcon={CrossIcon}
                  filling="none"
                />
                <AppBtn
                  className="profile__tips-accept-btn"
                  onClick={() => setAmountInputValue(Number(tipsInputValue))}
                  RightIcon={CheckMarkIcon}
                  filling="none"
                />
              </>
            )}
          </div>
        )}

        <StarRating setRating={setRating} />

        <AppBtn
          className="profile__feedback-btn"
          onClick={onFeedbackClick}
          RightIcon={FeedbackIcon}
          filling="none"
        >
          Оставить отзыв
        </AppBtn>

        {isFeedbackOpen && (
          <div className="profile__textarea-container">
            <textarea
              placeholder="Оставьте отзыв"
              className="profile__textarea"
              value={feedback}
              maxLength={200}
              onChange={(evt) => setFeedback(evt.target.value)}
            />
            {feedback && (
              <AppBtn
                className="profile__tips-clear-btn profile__feedback-clear-btn"
                onClick={() => setFeedback('')}
                RightIcon={CrossIcon}
                filling="none"
              />
            )}
          </div>
        )}
      </div>
    </StyledProfile>
  );
};

export default Profile;
