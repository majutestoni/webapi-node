import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmpresa1686677786090 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "empresa",
        columns: [
          { name: "id", type: "int", isPrimary: true, generationStrategy: "increment" },
          { name: "razao_social", type: "varchar", length: "155", isNullable: false },
          { name: "cep", type: "char", length: "8" },
          { name: "cidade", type: "varchar", length: "155", isNullable: false },
          { name: "estado", type: "char", length: "2", isNullable: false },
          { name: "bairro", type: "varchar", length: "155", isNullable: false },
          { name: "complemento", type: "varchar", length: "155" },
          { name: "ativa", type: "boolean", default: false},
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
