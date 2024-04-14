npm init -y
- Inicializa projeto node, criando arquivo package.json

Alternativas ao Node: Deno e Bun

Uso do typescript 
- npm i typescript @types/node -D
- npx tsc --init
- copiar código de github.com/tsconfig/bases, de acordo com a versão node no arquivo tsconfig.json
- npm i tsx -D
- package.json: "dev": "tsx watch src/server.ts"
Uso do npx
Uso do fastify

API REST

Métodos HTTP
Corpo da requisição
Parametros de busca
Parametros de rota
Cabeçalhos

Banco de dados
- Opções: Driver nativo, Query Builders e ORMs
- Prisma
    - npx prisma init --datasource-provider SQLite