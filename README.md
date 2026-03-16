# API Filmes - Node.Js + Express
API REST simples para gerenciar filmes e séries

## Pré-requisitos
- Node.js instalado

##   Como rodar

### Instalar dependências
```bash
npm i
```

### Iniciar  servidor
```bash
node index.js
```

### Acessar
Abra o nevegador em: `http://localhost:3000`

## Endpoints

### Filmes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Buscar um filme específico |
| GET | `/filmes/?genero=` | Buscar um filme específico por genero |
| POST | `/filmes` | Cria um filme |


### Séries

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/series` | Lista todos os series |
| GET | `/series/:id` | Buscar uma serie específico |
| GET | `/series/?genero=` | Buscar uma serie específico por genero |
| POST | `/series` | Cria uma serie |

## Tenologias 
- Node.js
- Express

## Notas 
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
