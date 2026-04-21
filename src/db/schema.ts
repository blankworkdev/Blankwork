import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp" }),
  image: text("image"),
  solanaAddress: text("solanaAddress"),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
});

export const session = sqliteTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId").notNull(),
  expires: integer("expires", { mode: "timestamp" }).notNull(),
});

export const verificationtoken = sqliteTable("verificationtoken", {
  identifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: integer("expires", { mode: "timestamp" }).notNull(),
});

export const task = sqliteTable("task", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  reward: integer("reward").notNull(), // in lamports or something
  creatorId: text("creatorId").notNull(),
  status: text("status").notNull().default("open"), // open, assigned, completed, paid
  createdAt: integer("createdAt", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const submission = sqliteTable("submission", {
  id: text("id").primaryKey(),
  taskId: text("taskId").notNull(),
  workerId: text("workerId").notNull(),
  solanaAddress: text("solanaAddress").notNull(),
  status: text("status").notNull().default("pending"), // pending, approved, rejected
  createdAt: integer("createdAt", { mode: "timestamp" }).$defaultFn(() => new Date()),
});