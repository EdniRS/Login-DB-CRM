import './Dashboard.css';
import PageHeader from '../../components/comp-UI/PageHeader'
import { CurrentUser } from '../../data/UserData'

export default function Dashboard() {
  return (
    <>
    <PageHeader
      title={`Bienvenido, ${CurrentUser.nombre.split(' ')[0]}`}   
      subtitle="Aquí tienes el pulso de tu negocio y relaciones comerciales hoy." 
      actionText='Ver Contactos'
    />
    <h2>Hola desde dashboard</h2>
    </>
    
  )
}
