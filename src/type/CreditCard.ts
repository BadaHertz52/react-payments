import { CardCompany } from "./CardCompany";

export interface CreditCard {
  name: string;
  date: string;
  company?: CardCompany;
  number: string[];
  securityCode: string;
  password: string;
  nickname: string;
};

export const getDefaultCreditCard = (): CreditCard => ({
  name: '',
  date: '',
  number: ['', '', '', ''],
  securityCode: '',
  password: '',
  nickname: ''
});