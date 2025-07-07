export const filters = [
  { value: 'price', label: 'Сумма' },
  { value: 'accountNumber', label: 'Номер счета' },
];

export const accountsHeaders = [
  { label: 'Номер счета', sortable: true, type: 'number' },
  { label: 'Дата создания', sortable: true, type: 'date' },
  { label: 'Сумма', sortable: true, type: 'price' },
  { label: 'Оплатить до', sortable: true, type: 'date' },
  { label: 'Статус', sortable: false },
];
