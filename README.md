# Repository pattern

* [Overview](#overview)

* [Technologies](#technologies)

* [How to use](#How-to-use)

* [Routes](#routes)

* [References](#references)

## Overview:

This project presents the application of the repository project pattern in Nodejs. Running a basic CRUD application for two different entities, using the <strong>generic repository pattern</strong>.

## Technologies

* [Nodejs](https://nodejs.org/en/)
* [Docker](https://www.docker.com/)
* [Mongodb](https://www.mongodb.com/pt-br)

## How to use
Run application using docker, which will upload two containers one with nodejs server and another container with mongodb.
```
docker-compose up
```
## Routes

* ```/user/create``` POST
* ```/user/getAll``` GET
* ```/user/getById/:id``` GET

* ```/product/create``` POST
* ```/product/update/:id``` PUT
* ```/user/delete/:id``` DELETE

## References:
### https://medium.com/@erickwendel/generic-repository-with-typescript-and-node-js-731c10a1b98e
### https://charles-willian.medium.com/aplicando-repository-pattern-com-nodejs-typescript-e-typeorm-e7d9c6253e31
