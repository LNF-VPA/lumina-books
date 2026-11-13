import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }) {
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Altura fija y object-cover para que todas las imágenes cuadren perfectamente */}
      <div className="h-44 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img 
          src={product.imagen || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80"} 
          alt={product.nombre} 
          className="object-cover h-full w-full"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start mb-1">
          <Badge variant="secondary" className="text-xs">{product.categoria}</Badge>
          {/* Moneda cambiada a Soles */}
          <span className="text-lg font-bold text-indigo-600">S/ {Number(product.precio).toFixed(2)}</span>
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-1">{product.nombre}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-gray-600 line-clamp-2">{product.descripcion}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Agregar al Carrito</Button>
      </CardFooter>
    </Card>
  );
}