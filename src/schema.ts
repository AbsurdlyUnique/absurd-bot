// src/schema.ts
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

// Example table definitions
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }).unique(),
});

export const pgStatActivity = pgTable('pg_stat_activity', {
  datname: text('datname')
});