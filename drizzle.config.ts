import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    dialect: 'postgresql',
    schema: "./src/schema.ts",
    dbCredentials: {
        database: "dev",
        host: "localhost",
        password: "dev",
        port: 5432,
        user: "dev"
    },
    verbose: true,
    strict: true
})