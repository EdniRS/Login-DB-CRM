const API_URL = "https://fakestoreapi.com/users";

// Get Clientes



export async function obtenerClientes(){
  const respuesta = await fetch(API_URL, {
    Method: 'GET',
  })
  if(!respuesta.ok){
    throw new Error('Error al obtener los clientes');
  }
  const datos = await respuesta.json();
  return datos;
}
