import { Request, Response, Router } from "express";
import IEmpresa from "../interfaces/IEmpresa";
import EmpresaRepository from "../repositories/EmpresaRepository";

const empresasRouter = Router();
const empresaRouter = Router();

empresasRouter.get("/", async (_req: Request, res: Response): Promise<Response> => {
  try {
    const empresas = await EmpresaRepository.getEmpresas();
    return res.status(200).json(empresas);
  } catch (error) {
    return res.status(401).json("Nenhuma empresa encontrada");
  }
});

empresaRouter.post("/insert", async (req: Request, res: Response): Promise<Response> => {
  try {
    const newEmpresa: IEmpresa = req.body;

    newEmpresa.ativa = true;
    const empresa = await EmpresaRepository.postEmpresa(newEmpresa);
    return res.status(200).json(empresa);
  } catch (error) {
    return res.status(422).json("formato invalido");
  }
});

empresaRouter.get("/:id", async (req: Request, res: Response): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const idNumero = Number(id);

    const empresa = await EmpresaRepository.getEmpresaById(idNumero);
    if (empresa.length > 0) {
      return res.status(200).json(empresa[0]);
    } else {
    return res.status(200).json("Empresa não encontrada");

    }
  } catch (error) {
    return res.status(422).json("Empresa não encontrada");
  }
});

empresaRouter.put("/update/:id", async (req: Request, res: Response): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const body = req.body;
    const idNumero = Number(id);

    const empresa = await EmpresaRepository.getEmpresaById(idNumero);

    if(empresa.length > 0){
      EmpresaRepository.updateEmpresa(body, idNumero);
      return res.status(200).json("Atualizado");
    } else {
      return res.status(200).json("Empresa não encontrada");
    }

  } catch (error) {
    return res.status(422).json("formato invalido");
  }
});

empresaRouter.delete("/delete/:id", async (req: Request, res: Response): Promise<Response> => {
  try {

    const id: string = req.params.id;
    const idNumero = Number(id);

    const empresa = await EmpresaRepository.getEmpresaById(idNumero);
    if(empresa.length > 0){
      empresa[0].ativa = false;
      EmpresaRepository.updateEmpresa(empresa[0], id);
      return res.status(200).json(empresa);
    }else {
      return res.status(200).json("Empresa não encontrada");

    }
  } catch (error) {
    return res.status(422).json("formato invalido");
  }
});

export { empresasRouter, empresaRouter };
