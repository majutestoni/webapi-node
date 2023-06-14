import { DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import LicensaAmbiental from "../entities/LicensaAmbiental";
import ILicensaAmbiental from "../interfaces/ILicensaAmbiental";
const licensaRepository = AppDataSource.getRepository(LicensaAmbiental);

 const getLicensas = (): Promise<ILicensaAmbiental[]> => {
   return licensaRepository
     .createQueryBuilder("licensa")
     .leftJoinAndSelect("licensa.empresa", "empresa")
     .getMany();
 };


const postLicensa = (licensa: ILicensaAmbiental): Promise<LicensaAmbiental> => {
    return licensaRepository.save(licensa);
  };

  const updateLicensa = (atualizar: ILicensaAmbiental, id): Promise<UpdateResult> => {
    return licensaRepository.update(id, atualizar);
  }
  
  const getLicensaById = (id: number): Promise<ILicensaAmbiental | undefined> => {
    return licensaRepository
      .createQueryBuilder("licensa")
      .leftJoinAndSelect("licensa.empresa", "empresa")
      .where("licensa.id = :id", { id })
      .getOne();
  };
  
 const deleteLicensa = (id: number): Promise<DeleteResult> => {
  return licensaRepository.delete(id)
};

export default { getLicensas, postLicensa, updateLicensa, getLicensaById, deleteLicensa };
