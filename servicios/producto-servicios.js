//GET
const listaProductos = () => {
  fetch(`http://localhost:3000/producto`)
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
}

const listarUnProduto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((resposta) => {
    return resposta.json();
  });
};
  
const buscarProductos = () => {
  fetch(`http://localhost:3000/producto/`)
    .then((resposta) => resposta.json())
    .then(jsonData => {
        data = jsonData;
}).catch((error) => console.log(error));
}

//POST
const creaProdutos = (name, imageUrl, price, description) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      description,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("No fue posible crear un producto");
  });
};

// PUT/PATCH
const alteraProduto = async (name, imageUrl, price, description, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      description
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProduto,
  creaProdutos,
  alteraProduto,
  deleteProducto,
  buscarProductos
};
