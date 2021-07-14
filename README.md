# Sporttrade Coding Exercise

Prerequisites:

- postgres
- node
- npm 
- docker-compose

To bootstrap the database, do the following ONLY once: 

- Clone the repo
- `docker-compose up -d` to start postgres 
- `cd sporttrade-exercise-api`
- `npm run db:migrate` to run migrations -- this will create data tables in postgres
- `npm run db:seed` to run seeds -- this will insert data into the tables

To start the application:

- `docker-compose up -d` at the repo root dir to start postgres (only if you haven't already done this in the previous step)
- `cd sporttrade-exercise-api && npm start` in 1 terminal window
- `cd sporttrade-exercise-web && npm start` in another terminal window
