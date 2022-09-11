# Ensolvers Challenge - OnlyNotes

## Project Objectives

- Structure a SPA (simple page web aplication),
- Create Backend and Frontend separately
- Make the Backend an API that will be consumed by the Frontend

## Comments

- the "setUp.sh" file, clone the repository, install the dependencies from the package.json 
and prepare .env (environment file) to the backend , entering the required information
- You Need install Postgres 14.5 and create a DB with pgAdmin4 (It's what I do), the rest is done by the ORM (sequelize) when starting the back
- DEPLOY: https://only-notes.vercel.app

## How to setUp

1) install postgres 14.5
2) create a db with pgAdmin4
3) install node v16.15.0 or higher
4) clone the repository with Git
5) make a npm install in the folder "back" and the folder "front"
6) create .env in the folder "back" ( VARS: DB_USER=postgres DB_PASSWORD={ you pass in postgres} DB_HOST=localhost DB_NAME= {the one you created}  )
7) run back with npm start and run front with npm start separately

or

- run the file setUp.sh

### Requirements

- __Node__: v16.15.0 or higher => https://nodejs.org/es/download/
- __Postgres__: 14.5 => https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

### dependencies

- __react__: 18.2.0
- __react-dom__: 18.2.0
- __react-router-dom__: 5.2.0
- __redux__: 4.2.0
- __redux-thunk__: 2.4.1
- __react-redux__: 8.0.2
- __sweetalert2__: 11.4.32
- __formik__: 2.2.9
- __axios__: 0.27.2
- __tailwindcss"__:3.1.8
