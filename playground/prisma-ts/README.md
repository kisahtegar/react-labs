# Prisma with TypeScript Playground

A minimal setup for using **Prisma ORM** with **TypeScript**, great for learning and testing database workflows in a lightweight environment.

## 🔧 Setup Instructions

### 1. Initialize the Project

```bash
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init
```

This sets up a basic TypeScript project with runtime support using `ts-node`.

### 2. Install Prisma

```bash
npm install -D prisma
```

Install Prisma CLI as a dev dependency.

### 3. Initialize Prisma

```bash
npx prisma init --datasource-provider sqlite
```

This creates a `prisma/schema.prisma` file and sets up SQLite as the database provider by default.

### 4. Apply Initial Migration

```bash
npx prisma migrate dev --name init
```

This generates your first migration and creates the database file.

### 5. Open Prisma Studio

```bash
npx prisma studio
```

Prisma Studio is a visual editor to explore and edit your database content in the browser.

---

## 📁 Folder Structure

```graphql
prisma-ts/
├── prisma/
│   └── schema.prisma   # Prisma schema definition
├── node_modules/
├── package.json
├── tsconfig.json
└── ...
```

---

## 📚 Notes

- Prisma uses your schema file to define models and generate a database structure.
- For more complex examples (e.g., PostgreSQL, relationships, seeding), extend this base.
- `ts-node` allows you to run TypeScript files without compiling them.

---

## 🔗 Resources

- [Prisma Docs](https://www.prisma.io/docs)
- [SQLite Setup with Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/sql-typescript)
