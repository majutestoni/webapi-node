import Empresa from "../entities/Empresa";
import IEmpresa from "../interfaces/IEmpresa";
import { AppDataSource } from "../../database/data-source";
import { FindOptionsWhere, UpdateResult } from "typeorm";
const empresaRepository = AppDataSource.getRepository(Empresa);

const getEmpresas = (): Promise<IEmpresa[]> => {
  return empresaRepository.query(`SELECT * FROM empresa WHERE ativa <> 0`);
};

const postEmpresa = (empresa: IEmpresa): Promise<IEmpresa> => {
  return empresaRepository.save(empresa);
};

const updateEmpresa = (atualizar: IEmpresa, id): Promise<UpdateResult> => {
  return empresaRepository.update(id, atualizar);
}

const getEmpresaById = (id: number): Promise<IEmpresa[]> => {
  return empresaRepository.query(`SELECT * FROM empresa WHERE id = ${id}`);
};
export default { getEmpresas, postEmpresa, getEmpresaById, updateEmpresa };
