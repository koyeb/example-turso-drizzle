import "dotenv/config";
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import methodOverride from "method-override";
import { db } from "./db/db";
import { todos } from "./db/schema";
import { eq } from "drizzle-orm";

const app: Express = express();
const port = process.env.PORT || 4000;

// method override
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req: Request, res: Response) => {
  const result = await db.select().from(todos);
  // : Todo[]
  res.render("index", { todos: result });
});

app.get("/new", (req: Request, res: Response) => {
  res.render("new");
});

app.post("/submit", async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const values = { title, description, dueDate: new Date(dueDate), priority };
    await db.insert(todos).values(values);
    res.status(201).redirect("/");
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).send({
      error: `An error occurred while adding the To-Do: ${error.message}`,
    });
  }
});

app.get("/todo/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await db
      .select()
      .from(todos)
      .where(eq(todos.id, Number(id)));

    res.render("todo", { todo: todo[0] });
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).send({
      error: `An error occurred while fetching the To-Do: ${error.message}`,
    });
  }
});

app.put("/submit/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, priority, status } = req.body;
    const values = {
      title,
      description,
      dueDate: new Date(dueDate),
      priority,
      status,
      completedAt: status === "Completed" ? new Date() : null,
    };

    await db
      .update(todos)
      .set(values)
      .where(eq(todos.id, Number(id)));

    res.status(204).redirect("/");
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).send({
      error: `An error occurred while updating the To-Do: ${error.message}`,
    });
  }
});

app.listen(port, () => {
  console.log(`🔥🔥🔥: Server is running at http://localhost:${port}`);
});
