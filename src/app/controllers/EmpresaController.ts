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
    return res.status(401).json({message: "Nenhuma empresa encontrada", error: error});
  }
});

empresaRouter.post("/insert", async (req: Request, res: Response): Promise<Response> => {
  try {
    const newEmpresa: IEmpresa = req.body;

    newEmpresa.ativa = true;
    const empresa = await EmpresaRepository.postEmpresa(newEmpresa);
    return res.status(201).json(empresa);
  } catch (error) {
    return res.status(422).json({message: "formato invalido", error: error.driverError});
  }
});

empresaRouter.get("/:id", async (req: Request, res: Response): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const idNumero = Number(id);

    const empresa = await EmpresaRepository.getEmpresaById(idNumero);
    if (empresa != undefined && empresa != null) {
      return res.status(200).json(empresa);
    } else {
      return res.status(404).json({message: 'Empresa não encontrada'})
    }
  } catch (error) {
    return res.status(422).json({ message: "Falha ao procurar empresa", error: error });
  }
});

empresaRouter.put("/update/:id", async (req: Request, res: Response): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const body = req.body;
    const idNumero = Number(id);

    const empresa = await EmpresaRepository.getEmpresaById(idNumero);

    if(empresa != undefined){
      EmpresaRepository.updateEmpresa(body, idNumero);
      return res.status(200).json("Atualizado");
    } else {
      return res.status(404).json({message: 'Empresa não encontrada'})
    }

  } catch (error) {
    return res.status(422).json({message: "formato invalido", error: error});
  }
});

empresaRouter.delete("/delete/:id", async (req: Request, res: Response): Promise<Response> => {
  try {

    const id: string = req.params.id;
    const idNumero = Number(id);

    const empresa = await EmpresaRepository.getEmpresaById(idNumero);
    if(empresa != undefined){
      empresa.ativa = false;
      EmpresaRepository.updateEmpresa(empresa, id);
      return res.status(200).json(empresa);
    }else {
      return res.status(404).json({message: 'Empresa não encontrada'})

    }
  } catch (error) {
    return res.status(422).json({message: "formato invalido", error: error});
  }
});

export { empresasRouter, empresaRouter };
