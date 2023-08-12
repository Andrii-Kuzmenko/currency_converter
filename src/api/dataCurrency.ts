import { DataCurrency } from '../types/DataCarrency';
import { client } from '../utils/axiosClient';

export const getCurrency = () => { 
  return client.get<DataCurrency>('');
};
