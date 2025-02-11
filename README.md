# Expenses Management

A simple, open-source expense tracking web application.  Feel free to use and modify it for your own needs.  Contributions are welcome!

## Description

This project helps manage personal finances by tracking income and expenses. It uses a PERN stack for a robust and scalable solution.

## Tech Stack (PERN)

* **Frontend:** React, React Router DOM, Tailwind CSS, Font Awesome, Zod, React Hook Form, Axios
* **Backend:** Express.js
* **Database:** PostgreSQL
* **API:** RESTful

<details>
  <summary><strong>Client Dependencies</strong></summary>
      <details>
        <summary><em>react-router-dom</em></summary>
        <p>Routing</p>
      </details>
      <details>
        <summary><em>tailwindcss</em></summary>
        <p>Styling</p>
      </details>
      <details>
        <summary><em>fontawesome</em></summary>
        <p>Icons</p>
      </details>
      <details>
        <summary><em>zod + react-hook-form</em></summary>
        <p>Form handling</p>
      </details>
      <details>
        <summary><em>axios</em></summary>
        <p>HTTP requests</p>
      </details>
</details>

## Getting Started

**1. Clone and Install:**

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

**2. Environment Variables:**

Create `.env` files in both the client and server directories:

**Client (`~/expenses-management/packages/client/.env`):**

```
API_PORT=3000
API_HOST=localhost
```

**Server (`~/expenses-management/packages/server/.env`):**

```
POSTGRES_DB=YOUR_DATABASE
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
API_PORT=3000
API_HOST=localhost
```

**Remember to replace placeholders like `YOUR_DATABASE` with your actual database credentials.**

**3. Run the Application:**

Start both the client and server:

**Client (default URL: `http://localhost:5173`):**

```bash
cd ~/expenses-management
npm run client  // or npm run dev in packages/client
```

**Server (default API URL: `http://localhost:3000/api/v1`):**

```bash
cd ~/expenses-management
npm run server // or npm run dev in packages/server
```


## Database

The database schema is detailed below.  Conceptual and logical models are provided for reference.

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
