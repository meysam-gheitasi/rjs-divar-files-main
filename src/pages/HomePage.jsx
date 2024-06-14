import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import Loader from "src/components/modules/Loader"
import Main from "src/components/templates/Main"
import Sidebar from "src/components/templates/Sidebar"
import { useValue } from "src/context/ProductsProvider"
import { getCategories } from "src/services/admin"
import { getAllPosts } from "src/services/user"
import { filterPosts, searchInPosts } from "src/utils/searchs"

const container = { display: 'flex' }

function HomePage() {

  const { data: categories, isLoading: categoriesLoading } = useQuery(['get-categories'], getCategories)
  const { data: allPosts, isLoading: postsLoading } = useQuery(['get-all-posts'], getAllPosts)

  const [displayed, setDisplayed] = useState([])

  const { query, setQuery } = useValue()

  useEffect(() => { 
    setDisplayed(allPosts) 
    let finalPosts = searchInPosts(allPosts?.data?.posts, query.search)
    finalPosts = filterPosts(finalPosts, query.category)

    setDisplayed(finalPosts)

  }, [allPosts, displayed, query])

  return (
    <>
      {categoriesLoading || postsLoading || !displayed
        ?
        <Loader />
        :
        <div style={container}>
          <Sidebar categories={categories} />
          <Main allPosts={displayed} />
        </div>
      }
    </>
  )
}

export default HomePage