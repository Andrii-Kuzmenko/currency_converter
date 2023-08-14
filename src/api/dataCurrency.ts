import { DataCurrency } from '../types/DataCarrency';
import { client } from '../utils/axiosClient';

export const getCurrency = (from: string, to: string) => {
  return client.get<DataCurrency>('', from, to);
};
