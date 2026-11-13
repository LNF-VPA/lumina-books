import React from 'react';
import { Button } from "@/components/ui/button";

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-2 my-6">
      <Button
        variant={selectedCategory === 'Todos' ? 'default' : 'outline'}
        onClick={() => onSelectCategory('Todos')}
        className="rounded-full"
      >
        Todos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onSelectCategory(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}