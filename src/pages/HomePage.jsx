import React from 'react'
import Dashboard from '../components/home/dashboard';

const HomePage = () => {
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    stock: Math.floor(Math.random() * 100),
    image: `https://imgs.search.brave.com/_toqT8IRn1TgcZsWaLmUIyGozfTFh2vCNwcyEiZ3NAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzExdjJwUFZIS0wu/anBn`
  }));

  return (
    <Dashboard products={products} />
  );
};

export default HomePage