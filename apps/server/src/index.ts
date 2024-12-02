import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import type { GetTestResponse } from "@monorepo/types";

const app = new Hono();

// Add CORS middleware
app.use(
  "/*",
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (c) => c.text("Hello Hono!"));

app.get("/test", (c) => {
  const testJson: GetTestResponse = { message: "Hello from Hono + Node API!" };
  return c.json(testJson);
});

const port = 8080;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
