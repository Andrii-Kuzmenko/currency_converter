export interface DataCurrency {
  amount: number,
  base: string,
  date: string,
  rates: Rates,
}

export interface Rates {
  [key: string]: number;
}
