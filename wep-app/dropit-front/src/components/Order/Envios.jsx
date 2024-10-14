import { Header } from "../Header"
import { ArticlesContainer } from "../ArticlesContainer"
import OrdersList from './OrdersList';







export function Envios() {

  const orders = [
    {
      destination: 'Dg. 146 #128-53',
      date: '27 jul - 4:52',
      price: '22,300',
      route: 'Fontibón -> Engativá',
      status:"Pendiente"
    },
    {
      destination: 'Cll. 123 #45-67',
      date: '15 ago - 11:30',
      price: '18,000',
      route: 'Chapinero -> Usaquén',
      status:'En Camino'
    },
  ];

  return (


    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-3" >
      <Header />
      <div className="md:flex md:gap-40 md:mb-10">
        {/* Lista de pedidos */}
        <OrdersList orders={orders} />

      </div>
      <ArticlesContainer />



    </main>



  )
}
