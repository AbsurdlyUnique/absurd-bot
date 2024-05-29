CREATE TABLE IF NOT EXISTS "pg_stat_activity" (
	"datname" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
