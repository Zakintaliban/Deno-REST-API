import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";

const router = new Router();

router
  .get("/api", getProducts)
  .get("/api/:id", getProduct)
  .post("/api", addProduct)
  .put("/api/:id", updateProduct)
  .delete("/api/:id", deleteProduct);

export default router;
