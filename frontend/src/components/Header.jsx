import React from 'react';
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo1.png"; 

export function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Logo personalizado */}
          <img src={logoImage} alt="Lumina Books Logo" className="h-10 w-auto object-contain" />
          <span className="text-2xl font-bold text-indigo-600">Lumina Books</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Inicio</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Catálogo</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Acerca de</a>
        </nav>
        <div>
          <Button variant="outline" size="sm">Mi Carrito</Button>
        </div>
      </div>
    </header>
  );
}