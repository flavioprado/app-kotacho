import { Produto } from '../interfaces/produto.model';
import { City } from './city';
import { State } from './state';

export interface Item {  
  id?:string;
  pedId?:string;
  produto: Produto;  
  quantidade: string;
  precoEstimado:string;
  subTotal: number; 
}
