import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TotalProductos from './TotalProductos';
import TotalPedidos from './TotalPedidos';
import TotalIngresos from './TotalIngresos';
import PrecioPromProductos from './PrecioPromProductos';
import MasVendidos from './MasVendidos';

const Dashboard = () => {
  const [productos, setProductos] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get('https://fakestoreapi.com/products');
        setProductos(productsResponse.data);

        const cartsResponse = await axios.get('https://fakestoreapi.com/carts');
        setCarts(cartsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <article id="container">

      <section className="dashboard">
        <h1>Panel AMCHAM</h1>

        {loading ? (
          <section className="loader-container">
            <div className="loader"></div>
          </section>
        ) : (
          <section className="panel-container">
            <TotalProductos products={productos} />
            <TotalPedidos carts={carts} />
            <TotalIngresos carts={carts} />
            <PrecioPromProductos products={productos} />
            <MasVendidos carts={carts} products={productos} />
          </section>
        )}
      </section>

    </article>
  );
};

export default Dashboard;