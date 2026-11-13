import React from 'react';
import { Header } from '@/components/Header';
import { ProductList } from '@/components/ProductList';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductList />
      </main>
      <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
        &copy; 2026 Lumina Books. Laboratorio de Desarrollo Full-Stack.
      </footer>
    </div>
  );
}