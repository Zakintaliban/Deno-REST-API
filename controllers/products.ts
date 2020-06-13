import { Product } from "../types.ts";

let products: Product[] = [
  {
    id: 1,
    name: "Macbook Pro 2018",
    desc: "13 inch, 8 GB RAM",
    price: 20000000,
    condition: "new",
  },
  {
    id: 2,
    name: "Motorola G5S Plus",
    desc: "5.5 inch, 4 GB RAM",
    price: 3000000,
    condition: "new",
  },
  {
    id: 3,
    name: "Acer E5 475G",
    desc: "14 inch, 12 GB RAM (upgraded)",
    price: 7000000,
    condition: "used",
  },
  {
    id: 4,
    name: "iPad 2",
    desc: "10 inch, 2 GB RAM",
    price: 5000000,
    condition: "new",
  },
];

// desc: get all product ↓
// routes: GET /api ↓
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// desc: get single product ↓
// routes: GET /api/:id ↓
const getProduct = ({ response }: { response: any }) => {
  response.body = {
    success: true,
  };
};

// desc: add product ↓
// routes: POST /api ↓
const addProduct = ({ response }: { response: any }) => {
  response.body = {
    success: true,
  };
};

// desc: update product ↓
// routes: PUT /api/:id ↓
const updateProduct = ({ response }: { response: any }) => {
  response.body = {
    success: true,
  };
};

// desc: delete product ↓
// routes: DELETE /api/:id ↓
const deleteProduct = ({ response }: { response: any }) => {
  response.body = {
    success: true,
  };
};
export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
