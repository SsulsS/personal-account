export const getInputPlaceholder = (
  basePlaceholder: string,
  selectedCriteriaLabel: string | undefined
) => {
  if (!selectedCriteriaLabel) {
    return '';
  }

  if (selectedCriteriaLabel === selectedCriteriaLabel.toUpperCase()) {
    return `${basePlaceholder} ${selectedCriteriaLabel}`;
  }

  return `${basePlaceholder} ${selectedCriteriaLabel.toLowerCase()}`;
};
