##### **ATENÇÃO:** em desenvolvimento

# MeusGastos.com

Meusgastos.com é um software de finanças pessoal, o objectivo principal deste software é gerir os gastos e pagamento de serviços. Este projecto foi preparado na sequencia do workshop organizado pela lispa.

### Gestão do orçamento

- Criar orçamento e atribuir um valor
- reorçamentação
- Fechar o orçamento

### Gestão de gastos

- criar a lista de compras
- Adicionar item a lista de compra
- Remover item a lista de compra
- alterar o estado do item
- alterar o estado da lista
- listar gastos

### Gestão de Identidade

- Cada utilizador deverá iniciar sessão antes de trabalhar na lista
- Cada utilizador só poderá trabalhar em sua lista
- cada utilizador poderá atualizar os dados do seu perfil

### Como rodar o projeto

- #1 - clonar o projecto na tua máquina local
- #2 - instalar as dependecias via `npm install`
- #3 - vai naS pastas `framework -> database -> config` abre o ficheiro `connection.ts` adiciona os dados de conexão
- #4 - para rodar os testes `npm test`
- #5 - para rodar o projecto `npm run dev`

### Endpoints

- #1 - POST: `http://127.0.0.1:8080/users`

```js
BODY
{
    "userName": "tandavala",
    "email": "jose.tandavala@gmail.com"
}
```

- #2 - GET: `http://127.0.0.1:8080/users/d4c78874-6c50-42cc-b60f-6c5702aa945c`

- #3 - PUT: `http://127.0.0.1:8080/users/d4c78874-6c50-42cc-b60f-6c5702aa945c`

```js
BODY
{
    "userName": "tandavala",
    "email": "jose.tandavala@gmail.com"
}
```

- #4 - DELETE: `http://127.0.0.1:8080/users/d4c78874-6c50-42cc-b60f-6c5702aa945c`

- #5 - POST: `http://127.0.0.1:8080/users/d4c78874-6c50-42cc-b60f-6c5702aa945c/restore`
