export interface DataCurrency {
  amount: number,
  base: string,
  date: string,
  rates: Rates,
}

export interface Rates {
  AUD: number,
  BGN: number,
  BRL: number,
  CAD: number,
  CHF: number,
  CNY: number,
  CZK: number,
  DKK: number,
  GBP: number,
  HKD: number,
  HUF: number,
  IDR: number,
  ILS: number,
  INR: number,
  ISK: number,
  JPY: number,
  KRW: number,
  MXN: number,
  MYR: number,
  NOK: number,
  NZD: number,
  PHP: number,
  PLN: number,
  RON: number,
  SEK: number,
  SGD: number,
  THB: number,
  TRY: number,
  USD: number,
  ZAR?: number,
}