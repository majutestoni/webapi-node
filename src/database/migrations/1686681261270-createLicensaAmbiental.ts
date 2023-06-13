import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateLicensaAmbiental1686681261270 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "licensa_ambiental",
              columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "empresa_id", type: "int" },
                { name: "numero", type: "varchar", length: "255", isNullable: false }, // texto que pode conter letras
                { name: "orgao_ambiental", type: "varchar", length: "155" },
                { name: "emissao", type: "date", isNullable: false },
                { name: "validade", type: "date", isNullable: false },

              ],
            })
          );

          await queryRunner.createForeignKey(
            "licensa_ambiental",
            new TableForeignKey({
                columnNames: ["empresa_id"],
                referencedTableName: "empresa",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("licensa_ambiental", "empresa_id");
        await queryRunner.dropColumn("licensa_ambiental", "empresa_id");
        await queryRunner.dropTable("licensa_ambiental");
    }

}
