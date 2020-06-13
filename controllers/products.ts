import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Product } from "../types.ts";

let products: Product[] = [
  {
    id: "1",
    name: "Macbook Pro 2018",
    desc: "13 inch, 8 GB RAM",
    price: 20000000,
    condition: "new",
  },
  {
    id: "2",
    name: "Motorola G5S Plus",
    desc: "5.5 inch, 4 GB RAM",
    price: 3000000,
    condition: "new",
  },
  {
    id: "3",
    name: "Acer E5 475G",
    desc: "14 inch, 12 GB RAM (upgraded)",
    price: 7000000,
    condition: "used",
  },
  {
    id: "4",
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
const getProduct = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "no product found",
    };
  }
};

// desc: add product ↓
// routes: POST /api ↓
const addProduct = async ({
  response,
  request,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();

  if (!request.hasBody) {
    (response.status = 400),
      (response.body = {
        success: false,
        msg: "cannot add product",
      });
  } else {
    const product: Product = body.value;
    product.id = v4.generate();
    products.push(product);
    (response.status = 201),
      (response.body = {
        success: true,
        data: product,
      });
  }
};

// desc: update product ↓
// routes: PUT /api/:id ↓
const updateProduct = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    const body = await request.body();
    const updateData: {
      name?: string;
      desc?: string;
      price?: number;
      condition?: string;
    } = body.value;
    products = products.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    );
    (response.status = 200),
      (response.body = {
        success: true,
        data: products,
      });
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "no product found",
    };
  }
};

// desc: delete product ↓
// routes: DELETE /api/:id ↓
const deleteProduct = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  products = products.filter((p) => p.id !== params.id);
  response.body = {
    success: true,
    msg: "product has been removed",
    data: products,
  };
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
