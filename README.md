
# Web api em node

## Como utilizar

```bash
 git clone https://github.com/majutestoni/webapi-node.git
```

```bash
 npm i
```

Necessario criar um database MariaDB ou Mysql como o nome "webapi" para então poder dar o comando 

```bash
 npm start
```
que levantará o projeto
## Tabelas
#### Tabela empresa

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `int` | **Obrigatório**. id da empresa |
| `razao_social` | `varchar` | **Obrigatório**. |
| `cep` | `char` | **Obrigatório**. tamanho = 8 |
| `cidade` | `varchar` | **Obrigatório**.|
| `estado` | `char` | **Obrigatório**. tamanho = 2 |
| `bairro` | `varchar` | **Obrigatório**.|
| `complemento` | `varchar` | complemento |
| `ativa` | `bool` | **Obrigatório**. utilizado para exclusao logica |


#### Tabela licensa ambiental
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `int` | **Obrigatório**. id da licensa |
| `numero` | `varchar` | **Obrigatório**. |
| `orgao_ambiental` | `varchar` | **Obrigatório**|
| `emissao` | `date` | **Obrigatório** |
| `validade` | `date` | **Obrigatório**. |
| `empresa` | `int` | **Obrigatório**. chave estrangeira que liga  a empresa |

## Utilizado

 - [Express](https://expressjs.com/pt-br/)
 - [Typeorm](https://typeorm.io/)
 - [Mysql2](https://www.npmjs.com/package/mysql2) - e MariaDB na workbench 
 - [DBeaver](https://dbeaver.io/download/) - Como workbench

## Notas de Dev
 ### Migrations

1. para criar `npm run typeorm migration:create src/database/migrations/createEmpresa` 
2. Para rodar `npm run typeorm -- -d ./src/database/data-source.ts migration:run`



