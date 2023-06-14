import { DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import LicensaAmbiental from "../entities/LicensaAmbiental";
import ILicensaAmbiental from "../interfaces/ILicensaAmbiental";
const licensaRepository = AppDataSource.getRepository(LicensaAmbiental);

const getLicensas = (): Promise<ILicensaAmbiental[]> => {
  return licensaRepository.find();
};

const postLicensa = (licensa: ILicensaAmbiental): Promise<LicensaAmbiental> => {
    return licensaRepository.save(licensa);
  };

  const updateLicensa = (atualizar: ILicensaAmbiental, id): Promise<UpdateResult> => {
    return licensaRepository.update(id, atualizar);
  }
  
  const getLicensaById = (id: number): Promise<ILicensaAmbiental[]> => {
    return licensaRepository.query(`SELECT * FROM licensa_ambiental WHERE id = ${id}`);
  };

 const deleteLicensa = (id: number): Promise<DeleteResult> => {
  return licensaRepository.delete(id)
};

export default { getLicensas, postLicensa, updateLicensa, getLicensaById, deleteLicensa };
