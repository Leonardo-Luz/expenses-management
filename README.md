# Expenses Management

A simple expense tracking web application. Feel free to use and modify it for your own needs.

## Description

This project was created to help manage personal expenses.  It provides a basic application for tracking income and expenditure.  Contributions and improvements are welcome!

## Tech Stack - PERN

* **Frontend:** React
* **Backend:** Express.js
* **Database:** PostgreSQL
* **API:** RESTful

<details>
  <summary><strong>Client Dependencies</strong></summary>
  <ol>
    <li>
        <details>
          <summary><em>react-router-dom</em></summary>
          <p>Create routes</p>
        </details>
    </li>
    <li>
        <details>
          <summary><em>tailwindcss</em></summary>
          <p>Page style</p>
        </details>
    </li>
    <li>
        <details>
          <summary><em>fontawesome</em></summary>
          <p>Icons</p>
        </details>
    </li>
    <li>
        <details>
          <summary><em>zod + react-hook-form</em></summary>
          <p>Handle Forms</p>
        </details>
    </li>
    <li>
        <details>
          <summary><em>axios</em></summary>
          <p>HTTP requests</p>
        </details>
    </li>
  </ol>
</details>

## Installation

**Clone & Setup:**

```bash
git clone https://github.com/leonardo-luz/expenses-management

cd expenses-management

cd packages/client
npm install
touch .env
cd ../..

cd packages/server
npm install
touch .env
```

**Enviroment Variables:**

* Client ~/expenses-management/packages/client/.env

```env
API_PORT=3000
API_HOST=localhost
```

* Server ~/expenses-management/packages/server/.env

```env
POSTGRES_DB=YOUR_DATABASE
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

API_PORT=3000
API_HOST=localhost
```

**Run**

* Client - default url: http://localhost:5173

```bash
cd ~/expenses-management

npm run client
```

OR

```bash
cd ~/expenses-management/packages/client

npm run dev
```

* Server - default url: http://localhost:3000/api/v1

```bash
cd ~/expenses-management

npm run server
```

OR

```bash
cd ~/expenses-management/packages/server

npm run dev
```

## Database

The database schema is detailed below.  Conceptual and logical models are also available for reference.

[Database Schema](schema.sql)

<details>
  <summary><strong>Conceptual Model</strong></summary>
  <img src="conceptual_model.png" alt="Conceptual Database Model">
</details>

<details>
  <summary><strong>Logical Model</strong></summary>
  <img src="logical_model.png" alt="Logical Database Model">
</details>

## License

This project is licensed under the [MIT License](LICENSE.md).
