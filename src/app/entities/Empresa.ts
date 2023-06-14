import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("empresa")
class Empresa {
    
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { length: 155 })
  razao_social: string;

  @Column("char", { length: 8 })
  cep: string;

  @Column("varchar", { length: 155 })
  cidade: string;

  @Column("char", { length: 2 })
  estado: string;

  @Column("varchar", { length: 155 })
  bairro: string;

  @Column("varchar", { length: 155, default: null })
  complemento: string;

  // criar migration
  @Column("boolean", { default: false })
  ativa: boolean;
}

export default Empresa;
