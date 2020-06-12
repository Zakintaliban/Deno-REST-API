# HOW TO MAKE SIMPLE DENO API

---

1. make `server.ts` in your folder.
2. inside of it we import Application and Router like this:

```ts
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
```

FYI for Deno, they are not using any `package.json` or `node_modules`. they are now entirely online. so, you will import them from [deno.land](https://deno.land) in standard library or [std](https://deno.land/std).

3. after that, we going to initialize app and port, under `import`.

```ts
const port = 5000;
const app = new Application();

console.log(`server running on port ${port}`);

await app.listen({ port });
```

and now to execute it. we need to use our terminal and call:

```bash
deno run --allow-net server.ts
```

remember we want to use `--allow-net` or the flag. and there's many more of the flag like `--allow-read` or `--allow-write` and so on.

and now when we execute it. it will say that we don't have middleware to process requests, because we didn't initialize Router. now we going to make Router:

```ts
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 5000;
const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`server running on port ${port}`);

await app.listen({ port });
```

now we going to make GET API with the router:

```ts
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
```

and now we can execute it.

```bash
deno run --allow-net server.ts
```

right now we just use `response` not `useContext` because, again. we just need a response right now. and we use `{ response: any }` since right now we using typescript.

and now we use postman to see if the response is okay to postman.

now we just type "http://localhost:5000/api".

# right now I'm going to sleep 🥱. and I'll update it as soon as I can 😉.
