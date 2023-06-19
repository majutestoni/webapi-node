import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertLicensa1687191682720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO licensa_ambiental (empresa_id, numero, orgao_ambiental, emissao, validade, id) 
            VALUES (1, 'teste01', 'IBAMA', '2023-06-19', '2023-10-19', 1)`,
        );
        await queryRunner.query(
            `INSERT INTO licensa_ambiental (empresa_id, numero, orgao_ambiental, emissao, validade, id) 
            VALUES (1, 'teste02', 'IBAMA', '2023-06-19', '2023-10-19', 2)`,
        );
        await queryRunner.query(
            `INSERT INTO licensa_ambiental (empresa_id, numero, orgao_ambiental, emissao, validade, id) 
            VALUES (1, 'teste03', 'IBAMA', '2023-06-19', '2023-10-19', 3)`,
        );
        await queryRunner.query(
            `INSERT INTO licensa_ambiental (empresa_id, numero, orgao_ambiental, emissao, validade, id) 
            VALUES (2, 'teste04', 'IBAMA', '2023-06-19', '2023-10-19', 4)`,
        );
        await queryRunner.query(
            `INSERT INTO licensa_ambiental (empresa_id, numero, orgao_ambiental, emissao, validade, id) 
            VALUES (3, 'teste05', 'IBAMA', '2023-06-19', '2023-10-19', 5)`,
        );
        await queryRunner.query(
            `INSERT INTO licensa_ambiental (empresa_id, numero, orgao_ambiental, emissao, validade, id) 
            VALUES (3, 'teste06', 'IBAMA', '2023-06-19', '2023-10-19', 6)`,
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
