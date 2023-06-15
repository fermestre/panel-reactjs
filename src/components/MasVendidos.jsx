import React from 'react';

const ProductosMasVendidos = ({ carts, products }) => {
  const productSales = {};

  carts.forEach((cart) => {
    cart.products.forEach((product) => {
      if (productSales[product.productId]) {
        productSales[product.productId] += product.quantity;
      } else {
        productSales[product.productId] = product.quantity;
      }
    });
  });

  const sortedProductIds = Object.keys(productSales).sort(
    (a, b) => productSales[b] - productSales[a]
  );

  const topProducts = sortedProductIds.slice(0, 5).map((productId) => {
    const product = products.find((product) => product.id === parseInt(productId));
    return {
      ...product,
      sales: productSales[productId],
    };
  });

  return (
    <section className="metrica">
      <h2>Productos más vendidos: </h2>
      <ul>
        {topProducts.map((product) => (
          <li key={product.id}>
            {product.title} - {product.sales} ventas
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductosMasVendidos;
