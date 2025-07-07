import { useEffect, useState } from 'react';

import { TCurrencyPosition } from 'types/general';

import { useNumberIntl } from './useNumberIntl';

type TUseCurrencySign = (
  lang: string,
  currency: string | null
) => {
  sign: string | null;
  position: TCurrencyPosition;
};

const getCurrencyOptions = (currency: string | null) => {
  const options: Intl.NumberFormatOptions = {
    style: currency ? 'currency' : 'decimal',
    currency: currency || undefined,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return options;
};

export const useCurrencySign: TUseCurrencySign = (lang, currency) => {
  const [currencyOptions, setCurrencyOptions] =
    useState<Intl.NumberFormatOptions>(() => getCurrencyOptions(currency));

  const { formatNumber } = useNumberIntl(lang, currencyOptions);

  const [position, setPosition] = useState<TCurrencyPosition>('right');
  const [sign, setSign] = useState('');

  useEffect(() => {
    setCurrencyOptions(getCurrencyOptions(currency));
  }, [currency]);

  useEffect(() => {
    const formattedCurrencyString = formatNumber(0);

    setPosition(/^0/.test(formattedCurrencyString) ? 'right' : 'left');
    setSign(formattedCurrencyString.replace(/\d/g, '').trim());
  }, [currencyOptions, formatNumber]);

  if (!currency) {
    return { position: 'right', sign: null };
  }

  return { position, sign };
};
