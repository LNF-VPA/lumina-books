const API_URL = 'http://127.0.0.1:8000/api';

export async function getProductos() {
  try {
    const response = await fetch(`${API_URL}/productos/`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    return await response.json();
  } catch (error) {
    console.error("Error en getProductos:", error);
    throw error;
  }
}

export async function getCategorias() {
  try {
    const response = await fetch(`${API_URL}/categorias/`);
    if (!response.ok) {
      throw new Error('Error al obtener las categorías');
    }
    return await response.json();
  } catch (error) {
    console.error("Error en getCategorias:", error);
    throw error;
  }
}