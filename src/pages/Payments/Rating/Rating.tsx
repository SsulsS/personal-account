import { ChangeEvent, FC, Fragment } from 'react';

import { starsIds } from 'pages/Payments/constants';

import { StyledRating } from './Rating.styles';

interface IStarRatingProps {
  setRating: (value: string) => void;
}

const Rating: FC<IStarRatingProps> = ({ setRating }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };

  return (
    <StyledRating className="rating">
      {starsIds.map((item) => (
        <Fragment key={item.id}>
          <input
            className="star__input"
            id={item.id}
            type="radio"
            name="star"
            value={item.value}
            onChange={handleInputChange}
          />
          <label className="star__label" htmlFor={item.id}></label>
        </Fragment>
      ))}
    </StyledRating>
  );
};

export default Rating;
