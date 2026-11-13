import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { getProductos, getCategorias } from '@/services/api';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [productosData, categoriasData] = await Promise.all([
          getProductos(),
          getCategorias()
        ]);
        setProducts(productosData);
        setCategories(categoriasData);
        setError(null);
      } catch (err) {
        setError('No se pudo conectar con el servidor. Asegúrate de que Django esté encendido.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => {
        return product.categoria_nombre === selectedCategory || product.categoria === selectedCategory;
      });

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-lg text-gray-600 animate-pulse">Cargando catálogo desde el backend...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Catálogo de Libros</h2>
      <p className="text-gray-500 mb-6">Explora nuestra colección obtenida directamente desde la base de datos.</p>
      
      {/* Filtro de categorías dinámico (Actividad 7) */}
      <CategoryFilter 
        categories={categories.map(cat => cat.nombre)} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No hay libros disponibles en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}