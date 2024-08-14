import { Environment } from '@/shared/environment';
import { Api } from '../axios-config';

export interface IListagemCarros {
  id: string;
  nomeCarro: string;
  marcaCarro: string;
  modeloCarro: string;
  valorCarro: number;
}
export interface IDetalheCarros {
  id: string;
  nomeCarro: string;
  marcaCarro: string;
  modeloCarro: string;
  valorCarro: number;
}
type TCarrosComTotalCount = {
  data: IListagemCarros[];
  totalCount: number;
};


export {};
