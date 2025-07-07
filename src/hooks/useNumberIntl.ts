import { useMemo } from 'react';

export const useNumberIntl = (
  lang: string,
  options: Intl.NumberFormatOptions
) => {
  const optionsString = JSON.stringify(options);

  const formatNumber = useMemo(() => {
    const formatter = new Intl.NumberFormat(lang, JSON.parse(optionsString));

    return formatter.format;
  }, [lang, optionsString]);

  return { formatNumber };
};
