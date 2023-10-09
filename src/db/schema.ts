import {
  int,
  text,
  integer,
  sqliteTable,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const todos = sqliteTable(
  "todos",
  {
    id: int("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    dueDate: integer("due_date", {
      mode: "timestamp",
    }).notNull(),
    priority: text("priority", { enum: ["High", "Medium", "Low"] }).notNull(),
    status: text("status", {
      enum: ["To-Do", "In Progress", "Completed"],
    })
      .notNull()
      .default("To-Do"),
    createdAt: integer("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: integer("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    completedAt: integer("completed_at", {
      mode: "timestamp",
    }),
  },
  (todos) => ({
    nameIdx: uniqueIndex("nameIdx").on(todos.title),
  })
);
