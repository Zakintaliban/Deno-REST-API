import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 5000;
const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/api", ({ response }: { response: any }) => {
  response.body = "Selamat datang, Deno!";
});

console.log(`server running on port ${port}`);

await app.listen({ port });
