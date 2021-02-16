import { Produto } from '../interfaces/produto.model';


export interface Item {
  id?: string;
  numero: number;
  pedId?: string;
  produto: Produto;
  ativo: boolean;
  quantidade: number;
  precoEstimado: number;
  precoFinal: number;
}
