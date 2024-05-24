import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="py-[28px] px-[20px] text-cyan-900 flex-none mb-[60px] md:w-[350px] md:mb-0 lg:w-2/5 ">
      <div >
        <div className='flex-1 py-6'>
          <h2 className='text-[40px]   leading-none font-bold sm:text-[58px]'>La app para enviar a cualquier lugar</h2>
        </div>
        <div className='flex flex-col  pt-2 '>
          <p className='mb-10 text-[13px] sm:text-[17px] '>Solicita tu envío, elige el destino y relájate.</p>
          <input
            type="text"
            placeholder="Punto de origen"
            className='mb-4 p-2 border border-gray-300 rounded'
          />
          <input
            type="text"
            placeholder="Punto de destino"
            className='flex-1 mb-4 p-2 border border-gray-300 rounded'
          />
          <button className='bg-cyan-900 w-[170px] h-[40px] rounded-[10px]  text-OffWhite hover:bg-VeryDarkBlue '>Ver precios</button>
        </div>
      </div>
    </aside>
  )
}