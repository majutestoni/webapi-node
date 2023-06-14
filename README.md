
# Web api em node

## Como utilizar o projeto em sua maquina

```bash
 git clone https://github.com/majutestoni/webapi-node.git
```

```bash
 npm i
```

- Necessario criar um database MariaDB ou Mysql como o nome "webapi", demais informações de banco de dados disponível em: src\database\data-source.ts
- Rodar as migrations
```bash
 npm run typeorm -- -d ./src/database/data-source.ts migration:run
```
 - Levantar o projeto:
```bash
 npm start
```

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
 - [Node](https://nodejs.org/en) - v14.20.0
