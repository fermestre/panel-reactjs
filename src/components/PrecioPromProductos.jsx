import React from 'react';

const PrecioPromProductos = () => {
  const products = [
    {
      id: 1,
      titulo: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      precio: 109.95,
      categoria: "men's clothing",
      descripcion: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    },
    {
      id: 2,
      titulo: 'Mens Casual Premium Slim Fit T-Shirts',
      precio: 22.3,
      categoria: "men's clothing",
      descripcion: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing...',
    },
    {
      id: 3,
      titulo: 'Mens Cotton Jacket',
      precio: 55.99,
      categoria: "men's clothing",
      descripcion: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling...',
    },
    {
      id: 4,
      titulo: 'Mens Casual Slim Fit',
      precio: 15.99,
      categoria: "men's clothing",
      descripcion: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size...',
    },
    {
      id: 5,
      titulo: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      precio: 695,
      categoria: 'jewelry',
      descripcion: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed...",
    },
    {
      id: 6,
      titulo: 'Solid Gold Petite Micropave',
      precio: 168,
      categoria: 'jewelry',
      descripcion: 'Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction...',
    },
    {
      id: 7,
      titulo: 'White Gold Plated Princess',
      precio: 9.99,
      categoria: 'jewelry',
      descripcion: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary...',
    },
    {
      id: 8,
      titulo: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
      precio: 10.99,
      categoria: 'jewelry',
      descripcion: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    },
    {
      id: 9,
      titulo: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
      precio: 64,
      categoria: 'electronics',
      descripcion: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1...',
    },
    {
      id: 10,
      titulo: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      precio: 109,
      categoria: 'electronics',
      descripcion: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications...',
    },
    {
      id: 11,
      titulo: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5" 7mm',
      precio: 40.99,
      categoria: 'electronics',
      descripcion: '3D NAND flash are applied to deliver high transfer speeds. Remarkable transfer speeds that enable faster bootup and improved overall system performance...',
    },
    {
      id: 12,
      titulo: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
      precio: 114.99,
      categoria: 'electronics',
      descripcion: 'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer\'s limited warranty...',
    },
    {
      id: 13,
      titulo: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
      precio: 599,
      categoria: 'electronics',
      descripcion: '21.5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free sync technology. No compatibility for VESA Mount...',
    },
    {
      id: 14,
      titulo: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMUXEN) – Super Ultrawide Screen QLED',
      precio: 999.99,
      categoria: 'electronics',
      descripcion: '49 inch super ultrawide 32:9 curved gaming monitor with dual 27 inch screen side by side Quantum Dot (QLED) Technology, HDR support and factory...',
    },
    {
      id: 15,
      titulo: 'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats',
      precio: 56.99,
      categoria: "women's clothing",
      descripcion: 'Note:The Jackets is US standard size, Please choose size as your usual wear. 3 in 1 Jacket: detachable fleece jacket/hooded waterproof/breathable...',
    },
    {
      id: 16,
      titulo: 'Lock and Love Women\'s Removable Hooded Faux Leather Moto Biker Jacket',
      precio: 29.95,
      categoria: "women's clothing",
      descripcion: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (Sweater), Faux leather material for style and comfort / 2 pockets of...',
    },
    {
      id: 17,
      titulo: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
      precio: 39.99,
      categoria: "women's clothing",
      descripcion: 'Lightweight perfet for trip or casual wear—Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat...',
    },
    {
      id: 18,
      titulo: 'MBJ Women\'s Solid Short Sleeve Boat Neck V',
      precio: 9.85,
      categoria: "women's clothing",
      descripcion: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Dry flat',
    },
    {
      id: 19,
      titulo: 'DANVOUY Womens T Shirt Casual Cotton Short',
      precio: 12.99,
      categoria: "women's clothing",
      descripcion: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees...',
    },
    {
      id: 20,
      titulo: 'Opna Women\'s Short Sleeve Moisture',
      precio: 7.95,
      categoria: "women's clothing",
      descripcion: '100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric...',
    },
  ];

  const averagePrice =
    products.reduce((acc, product) => acc + product.precio, 0) / products.length;

  return (
    <section className="metrica">
      <h2>Precio promedio de los productos: </h2>
      <p>${averagePrice.toFixed(2)}</p>
    </section>
  );
};

export default PrecioPromProductos;
