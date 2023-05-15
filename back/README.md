# node-devops-back

## Dependecies

- Node 14.17.3
- Docker 20.10.5
- Docker-compose 1.26.2

## Install dendencies

```
npm install
```

## Run project development

Start database 

```
docker-compose up
```

Start project with hotreload
```
npm run serve
```

## Run tests

### Unit test 
```
    npm run test:unit
```

### Integration test

Start database

```
    docker-compose up
```

Run tests
```
    npm run test:integration
```

