import { pgTable, text, unique, serial, varchar } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const pg_stat_activity = pgTable("pg_stat_activity", {
	datname: text("datname"),
});

export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }),
	email: varchar("email", { length: 256 }),
},
(table) => {
	return {
		users_email_unique: unique("users_email_unique").on(table.email),
	}
});