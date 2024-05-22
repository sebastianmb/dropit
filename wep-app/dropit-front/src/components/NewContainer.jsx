import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] flex-none mb-[60px] md:w-[350px] md:mb-0 ">
      <div >
        <div className='flex-1 py-6'>
          <h2 className='text-[40px] leading-none font-bold sm:text-[58px]'>The Bright Future of Web 3.0?</h2>
        </div>
        <div className='flex-1  pt-9 px-4'>
          <p className='mb-10 text-[13px] sm:text-[15px] '>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue '>Read more</button>
        </div>
      </div>
    </aside>
  )
}