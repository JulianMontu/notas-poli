## Integrantes del grupo

- Natalia Katherine Hernandez Guaqueta
- Julian Andres Montufar Burbano
- Maddy Mesa
- Paola Andrea Moreno Piñeros
- Sara Sofia Mendez Prada
- Gloria Maria Velasquez Molina

## Ejecucion de pipeline de github actions

[![Docker Image CI](https://github.com/JulianMontu/notas-poli/actions/workflows/docker-image.yml/badge.svg)](https://github.com/JulianMontu/notas-poli/actions/workflows/docker-image.yml)


## Description

para correr nuestro backend en la misma red usamos:

```
docker-compose up --build
```

# ejecutar nuestro contenedor
```
docker compose up -d
```
# como trabajar docker en una misma red

el back se debe correr con este comando:

```
docker-compose up --build
```

se debe crear una network para poder comunicar los contenedores, lo podemos hacer con el siguiente comando

```
docker network create mi_red_compartida
```

para listar las network podemos utilizar este comando:
```
docker network ls
```

Inspeccionar una red específica: Para obtener detalles sobre la red compartida (como los contenedores que están conectados a ella), usa:
```
docker network inspect mi_red_compartida
```

Verificar la conexión de un contenedor a la red: Puedes verificar si un contenedor específico está conectado a la red usando:
```
docker network inspect mi_red_compartida | grep <nombre_del_contenedor>
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
