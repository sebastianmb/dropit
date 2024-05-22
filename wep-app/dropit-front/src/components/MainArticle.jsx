import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    <section className='mb-12 md:mb-0'>
      <picture className='block  h-full'>
        <source media='(max-width: 600px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />
        <img src={imageMobile} alt="image" className=' h-full object-cover'/>
      </picture>

    </section>
  )
}