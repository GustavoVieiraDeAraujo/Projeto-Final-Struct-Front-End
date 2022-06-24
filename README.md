# Portfolio Institucional Struct — Front-End

Projeto final do processo trainee da **Struct** (empresa junior de Engenharia de Computacao da UnB, 2022). SPA em React para o site institucional da Struct, com paginas publicas (home, sobre nos, portfolio, contato) e painel administrativo (CRUD de membros, projetos, parcerias).

> **Back-End:** [Projeto-Final-Struct-Back-End](https://github.com/GustavoVieiraDeAraujo/Projeto-Final-Struct-Back-End) (Rails API na porta 3333)

---

## Sumario

- [Participantes](#participantes)
- [Tecnologias](#tecnologias)
- [Escopo do Projeto](#escopo-do-projeto)
- [Requisitos](#requisitos)
- [Como Executar](#como-executar)
- [Paginas](#paginas)

---

## Participantes

| Nome                              |
|-----------------------------------|
| Gustavo Vieira de Araujo          |
| Miguel Carvalho de Medeiros       |

---

## Tecnologias

| Tecnologia         | Uso                                              |
|--------------------|--------------------------------------------------|
| React 18           | Framework de UI                                  |
| react-router-dom 6 | Roteamento client-side                           |
| styled-components  | Estilizacao CSS-in-JS                            |
| axios              | Cliente HTTP para comunicacao com a API           |
| react-icons        | Biblioteca de icones                             |
| Create React App   | Build tool                                       |

---

## Escopo do Projeto

| Funcionalidade                   | Implementacao                                                |
|----------------------------------|--------------------------------------------------------------|
| Home                             | Listagem de servicos e parceiros da API                       |
| Sobre Nos                        | Missao, visao, valores e membros da API                       |
| Portfolio                        | Listagem de projetos com detalhes                             |
| Contato                          | Formulario de contato vinculado a servico                     |
| Login Admin                      | Autenticacao por email/senha com token                        |
| CRUD Membros (admin)             | Criar, editar e listar membros                                |
| CRUD Parcerias (admin)           | Criar, editar e listar parcerias                              |
| CRUD Projetos (admin)            | Criar, editar e listar projetos                               |
| Navbar responsiva                | Menu hamburger para mobile                                    |
| Footer                           | Links para redes sociais (Instagram, Facebook, LinkedIn)      |

---

## Requisitos

- Node.js >= 14
- Yarn ou npm
- Back-End rodando em `http://localhost:3333`

---

## Como Executar

```bash
yarn install
yarn start
```

> O back-end Rails deve estar rodando na porta 3333 antes de iniciar o front-end.

---

## Paginas

| Rota              | Pagina           | Descricao                                           |
|-------------------|------------------|------------------------------------------------------|
| `/`               | Home             | Servicos e parceiros da Struct                        |
| `/about`          | Sobre Nos        | MVV, membros da equipe                                |
| `/portifolios`    | Portfolio        | Projetos realizados                                   |
| `/contato`        | Contato          | Formulario de contato                                 |
| `/admin`          | Login Admin      | Autenticacao de administrador                         |
| `/admin/members`  | Membros          | Listar, criar e editar membros                        |
| `/admin/partners` | Parcerias        | Listar, criar e editar parcerias                      |
| `/admin/projects` | Projetos         | Listar, criar e editar projetos                       |
