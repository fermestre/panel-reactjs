import React from 'react';

const IngresosTotales = ({ carts }) => {
  const ingresosTotales = carts.reduce((acc, cart) => {
    const totalProductos = parseFloat(cart.totalProductos);
    const quantity = parseFloat(cart.quantity);

    if (!isNaN(totalProductos) && !isNaN(quantity)) {
      return acc + totalProductos * quantity;
    } else {
      return acc;
    }
  }, 0);

  console.log('IngresosTotales:', ingresosTotales.toFixed(2));

  return (
    <>
          <p>${ingresosTotales.toFixed(2)}</p>
    </>
  );
};

const App = () => {
  const carts = [
    { totalProductos: '109.95', quantity: '3', id: 1 },
    { totalProductos: '22.3', quantity: '1', id: 2 },
    { totalProductos: '55.99', quantity: '1', id: 3 },
    { totalProductos: '15.99', quantity: '2', id: 4 },
    
  ];

  return (
    <section className="metrica">
      <h2>Ingresos totales:</h2>
      <IngresosTotales carts={carts} />
    </section>
  );
};

export default App;
