# Learn ORM and Express

Install local dependencies:

```sh
yarn
```

Install global dependencies:

```sh
yarn global add sequelize-cli sequelize mysql2 nodemon
```

Migrate tables and seed initial data:

```sh
sequelize db:migrate
sequelize db:seed:all
```

Run the API server:

```sh
yarn start
```

or

```sh
yarn dev
```

Access API server by opening `http://localhost:8000`
