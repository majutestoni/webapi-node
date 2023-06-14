import { Request, Response, Router } from "express";
import LicensaAmbientalRepository from "../repositories/LicensaAmbientalRepository";
import ILicensaAmbiental from "../interfaces/ILicensaAmbiental";

const licensasRouter = Router();
licensasRouter.get("/", async (_req: Request, res: Response): Promise<Response> => {
  try {
    const licensas = await LicensaAmbientalRepository.getLicensas();
    return res.status(200).json(licensas);
  } catch (error) {
    return res.status(401).json("Nenhuma licensa encontrada");
  }
});

const licensaRouter = Router();
licensaRouter.post("/insert", async (req: Request, res: Response): Promise<Response> => {
  try {
    const newLicensa: ILicensaAmbiental = req.body;
    const licensa = await LicensaAmbientalRepository.postLicensa(newLicensa);
    return res.status(200).json(licensa);
  } catch (error) {
    return res.status(422).json("Formato inválido");
  }
});

licensaRouter.get("/:id", async (req: Request, res: Response): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const idNumero = Number(id);

    const licensa = await LicensaAmbientalRepository.getLicensaById(idNumero);
    if (licensa != undefined) {
      return res.status(200).json(licensa);
    } else {
      return res.status(200).json("licensa não encontrada");
    }
  } catch (error) {
    return res.status(422).json("licensa não encontrada");
  }
});

licensaRouter.put("/update/:id", async (req: Request, res: Response): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const body = req.body;
    const idNumero = Number(id);

    const licensa = await LicensaAmbientalRepository.getLicensaById(idNumero);

    if (licensa != undefined) {
      LicensaAmbientalRepository.updateLicensa(body, idNumero);
      return res.status(200).json("Atualizado");
    } else {
      return res.status(200).json("licensa não encontrada");
    }
  } catch (error) {
    return res.status(422).json("formato invalido");
  }
});

licensaRouter.delete("/delete/:id", async (req: Request, res: Response): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const idNumero = Number(id);

    const licensa = await LicensaAmbientalRepository.getLicensaById(idNumero);
    if (licensa != undefined) {
      LicensaAmbientalRepository.deleteLicensa(idNumero);
      return res.status(200).json(licensa);
    } else {
      return res.status(200).json("licensa não encontrada");
    }
  } catch (error) {
    return res.status(422).json("formato invalido");
  }
});

export { licensasRouter, licensaRouter };
