export type InputColors = 'primary' | 'secondary' | 'error' | 'success';
export type InputAutoComplete = 'on' | 'off';
export type InputType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'submit'
  | 'tel'
  | 'decimal'
  | 'date'
  | 'select';
export type InputRules =
  | 'amount'
  | 'string'
  | 'inherit'
  | 'number'
  | 'address'
  | 'dpi'
  | 'phone'
  | 'length'
  | 'date'
  | 'select'
  | 'namePerson';
export type InputMode =
  | 'none'
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url';

export const inputModesList: { [key in InputRules]: InputMode } = {
  amount: 'numeric',
  number: 'numeric',
  dpi: 'numeric',
  date: 'numeric',
  address: 'email',
  select: 'text',
  phone: 'tel',
  string: 'text',
  inherit: 'text',
  length: 'text',
  namePerson: 'text',
};
