

<a id="Inicio"></a>
# Pokedex

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#1-Descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#2-Funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#3-Deploy-da-Aplicação)

:small_blue_diamond: [Screenshots](#4-Screenshots)

:small_blue_diamond: [Como rodar a aplicação](#5-Como-rodar-a-aplicação)

:small_blue_diamond: [Dados](#6-Dados)

:small_blue_diamond: [Linguagens, dependencias e libs utilizadas](#7-Linguagens,-dependencias-e-libs-utilizadas)

---

<a id="1-Descrição-do-projeto"></a>
##  :memo: Descrição do projeto 

O projeto **Pokedex** foi baseado nesse [Repositório](https://github.com/digitalinnovationone/js-developer-pokedex) sendo o intuito consumir a [PokeAPI](https://pokeapi.co/) para listagem dos dados.

---
<a id="2-Funcionalidades"></a>
##  :books: Funcionalidades

:heavy_check_mark: **Listagem**: o usuário ao clicar em *Load More*, será feita uma requisição a API e acrescentar os dados a listagem atual.

---
<a id="3-Deploy-da-Aplicação"></a>
##  :o:Deploy da Aplicação

> Link do deploy da aplicação https://pokedex-one-eta.vercel.app/

---
<a id="4-Screenshots"></a>
##  :art:Screenshots

![Tela 1](https://github.com/claudiomss/pokedex/blob/main/screenshots/tela%201.png?raw=true)
![Tela 2](https://github.com/claudiomss/pokedex/blob/main/screenshots/tela%202.png?raw=true)

![Tela 3](https://github.com/claudiomss/pokedex/blob/main/screenshots/Tela%203.png?raw=true)

---
<a id="5-Como-rodar-a-aplicação"></a>
##  :arrow_forward: Como rodar a aplicação 

Clone o projeto em sua máquina: 

```
git clone https://github.com/claudiomss/pokedex.git
```
Instale as dependências:

```
npm i
```
Iniciar aplicação:

```
npm run dev
```
---

<a id="6-Dados"></a>
##  :floppy_disk: Dados
Foi criado um classe da *Pokemon* para organização dos dados.

### Card - Pokedex

|number|name|type|types[]|photo|
| -------- |-------- |-------- |-------- |-------- |
|1|Bulbasaur|grass|grass, poison|https://...|

### Card - Detalhes *adicionado mais atributos 

|...|altura|peso|habilidades|hp|ataque|defesa|spAtaque|spDefesa|velocidade
| -------- |-------- |-------- |-------- |-------- |-------- |-------- |-------- |-------- |-------- |
||70|69|Overgrow - Chlorophyll|45|49|49|65|65|45


---
<a id="7-Linguagens,-dependencias-e-libs-utilizadas"></a>
##  :wrench:Linguagens, dependencias e libs utilizadas

- HTML
- CSS
- Javascript
- [PokeAPI](https://pokeapi.co/)

[ Voltar para o topo](#Inicio)
