import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertValues1687191132224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO empresa (razao_social, cep, cidade, estado, bairro, complemento, ativa, id) 
            VALUES ('Fulano', '89010001', 'Blumenau', 'SC', 'Centro', null, true, 1)`,
        );

        await queryRunner.query(
            `INSERT INTO empresa (razao_social, cep, cidade, estado, bairro, complemento, ativa, id) 
            VALUES ('Cliclano', '89010001', 'Blumenau', 'SC', 'Centro', null, true, 2)`,
        );

        await queryRunner.query(
            `INSERT INTO empresa (razao_social, cep, cidade, estado, bairro, complemento, ativa, id) 
            VALUES ('Beltrano', '89010001', 'Blumenau', 'SC', 'Centro', null, true, 3)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
