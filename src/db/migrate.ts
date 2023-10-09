import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "./db";

migrate(db, { migrationsFolder: "src/db/migrations" })
  .then(() => {
    console.log("Migrations completed!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Migrations failed!", err);
    process.exit(1);
  });
