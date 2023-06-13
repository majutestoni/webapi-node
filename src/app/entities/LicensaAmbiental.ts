import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import Empresa from "./Empresa";

@Entity("licensa_ambiental")
class LicensaAmbiental {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { length: 255, unique: true })
  numero: string;

  @Column("varchar", { length: 155 })
  orgao_ambiental: string;

  @Column("date")
  emissao: Date;

  @Column("date")
  validade: Date;

  @ManyToOne(() => Empresa)
  @JoinColumn({ name: "empresa_id" })
  empresa: Empresa;
}

export default LicensaAmbiental;
