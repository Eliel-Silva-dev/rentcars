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

const getAllCars = async (
  page = 1,
  id = '',
  filter = '',
): Promise<TCarrosComTotalCount | Error> => {
  try {
    const urlRelativa = `/cars?_page=${page}&_limit=${Environment.LIMITE_LINHAS_API}&nomeCarro_like=${filter}&id_like=${id}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environment.LIMITE_LINHAS_API,
        ),
      };
    }

    return new Error('Erro ao consultar os registro');
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message ||
        'Erro ao consultar os registros',
    );
  }
};

const getCarsById = async (id: string): Promise<IDetalheCarros | Error> => {
  try {
    const { data } = await Api.get(`/cars?${id}`);

    if (data) {
      return data;
    }

    return new Error('Erro ao consultar o resgistro');
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o registro',
    );
  }
};

const createCars = async (dados: Omit<IDetalheCarros, 'id'>): Promise<string | Error> => {
  try {
    const {data} = await Api.post<IDetalheCarros>('/cars', dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar o registro')
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Erro ao criar o registro',
    );
  }
};

const updateCarsById = async (): Promise<> => {
  try {
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Erro ao atualizar o registro',
    );
  }
};

const deleteCarsById = async (): Promise<> => {
  try {
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || 'Erro ao apagar o registro',
    );
  }
};

export { getAllCars, getCarsById, createCars, updateCarsById, deleteCarsById };
