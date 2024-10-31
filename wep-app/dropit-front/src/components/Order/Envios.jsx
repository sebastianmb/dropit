import { Header } from "../Header";
import { ArticlesContainer } from "../ArticlesContainer";
import OrdersList from './OrdersList';
import { useSession } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export function Envios() {
  const { session } = useSession()
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (session) {
      
      const sessionId = session?.id; // Esto obtiene el ID de la sesión directamente
      console.log("El ID de la sesión es:", sessionId);

      // Enviar el ID de usuario mediante una solicitud GET
      fetch(`http://localhost:3001/api/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionId}`,  // Aquí se envía el token de sesión
        }
      })
        .then(response => response.json())
        .then(data => {
          setOrders(data);  // Asignar las órdenes obtenidas del backend
          console.log(data)
        })
        .catch(error => {
          console.error("Error al obtener las órdenes:", error);
        });
    }
  }, [session]);

  return (
    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-3" >
      <Header />
      <div className="md:flex md:gap-40 md:mb-10">
        {/* Lista de pedidos */}
        <OrdersList orders={orders} />
      </div>
      <ArticlesContainer />
    </main>
  );
}
