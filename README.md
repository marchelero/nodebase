# nodebase

### Requerimientos
Para trabajar de forma local
- [Nodejs y Npm, ultima versión en lo posible](https://nodejs.org/en/)

### Instalar dependencias
```
npm install
```
en su versión corta
```
npm i
```

#### Iniciar API con npm
```
npm start
```
Entonces la api se encontrara corriendo el el puerto 3000 por defecto

#### Iniciar API con yarn
```
yarn start
```

### Sequelize
Instalar sequelize-cli
```
npm install -g sequelize-cli
```

### Generacion Bases de Datos
Sequelize permite crear una Base de datos, migrar la estructura y tambien el contenido con los siguientes 3 comandos:

```
npx sequelize-cli db:create
```
```
npx sequelize-cli db:migrate
```
```
npx sequelize-cli db:seed:all
```
Con ello se habra creado una base de datos de MYSQL con la configuracion completa.