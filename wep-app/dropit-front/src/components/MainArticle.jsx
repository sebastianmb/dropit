import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop-.jpg'

export const MainArticle = () => {
  return (
    <section className='mb-12 md:mb-0'>
      <picture className='block  h-full' >
        {/*<source media='(max-width: 600px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />*/}
        <img src={imageDesktop} alt="image" className=' rounded-[10px] h-full object-cover' style={{ maxHeight: '500px', width: '100%' }}/>
      </picture>

    </section>
  )
}