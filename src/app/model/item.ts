import { Produto } from '../interfaces/produto.model';
import { City } from './city';
import { State } from './state';

export interface Item {
  prodId: number;
  quantidade: string;
  subtotal: string; 
}
