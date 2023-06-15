import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const [showProducts, setShowProducts] = useState(false);

  const handleShowProducts = () => {
    setShowProducts(!showProducts);
  };

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return (
    <section className="metrica">
      <h2>Total de productos:</h2>
      <p>{productos.length}</p>
      <button onClick={handleShowProducts}>
        {showProducts ? 'Ocultar productos' : 'Ver productos'}
      </button>
      {showProducts && (
        <section className={`product-list ${showProducts ? 'visible' : ''}`}>
          {productos.slice(0, 20).map(product => (
            <section className='items' key={product.id}>
          {/* <p>ID: {product.id}</p> */}
          <p>Titulo: {product.title}</p>
          <p>Categoría: {product.category}</p>
          <p>Precio: {product.price}</p>
          {/* <p>Descripción: {product.description}</p> */}
          <picture>
            <img src={product.image} alt={product.title} className='imagen-productos' />
          </picture>
        </section>
          ))}
        </section>
      )}
    </section>
  );
};

export default TotalProductos;


