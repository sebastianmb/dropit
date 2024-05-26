import { Header } from "./Header"
import { MainArticle } from "./MainArticle"
import { NewContainer } from "./NewContainer"
import { ArticlesContainer } from "./ArticlesContainer"







export function Home() {
  return (
    
      
      <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-6" >
        <Header />
        <div className="md:flex md:gap-40 md:mb-10">
          <NewContainer />
          <MainArticle />

        </div>
        <ArticlesContainer />
      </main>
      
    
  )
}
