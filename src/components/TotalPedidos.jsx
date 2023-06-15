import React from 'react';

const TotalPedidos = ({ carts }) => {
  return (
    <section className="total-prod">
      <h2>Total de pedidos realizados: </h2>
      <p>{carts.length}</p>
    </section>
  );
};

export default TotalPedidos;
