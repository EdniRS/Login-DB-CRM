import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/comp-UI/PageHeader'
import ClienteTabla from '../../components/comp-Clientes/ClienteTabla'
import { obtenerClientes } from '../../data/clientesApi';





export default function Clientes() {
    const [clientes, setClientes] = useState([]);
      
    
      async function cargaDatos() {
        const datos = await obtenerClientes();
          setClientes(datos);
      };
    
    useEffect(() => {
      cargaDatos();

    } , [] );


  return (
    <>
      <PageHeader
      title='Clientes'
      subtitle="Aquí puedes gestionar tus clientes y relaciones comerciales."
      actionText="Agregar Contacto"
      />
      <ClienteTabla />
        {clientes.map(cliente => (
          <div key={cliente.id}>
            <p>Nombre: {cliente.name.firstname} {cliente.name.lastname}</p>
          </div>
        ))}
    </>
  )
}
