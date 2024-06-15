import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Loader from "src/components/modules/Loader"
import Main from "src/components/templates/Main"
import Sidebar from "src/components/templates/Sidebar"
import { useValue } from "src/context/ProductsProvider"
import { getCategories } from "src/services/admin"
import { getAllPosts } from "src/services/user"
import { filterPosts, searchInPosts } from "src/utils/searchs"

const container = { display: 'flex' }

function HomePage() {

  // gate cashing data categorys AND all posts as react-query.
  const { data: categories, isLoading: categoriesLoading } = useQuery(['get-categories'], getCategories)
  const { data: allPosts, isLoading: postsLoading } = useQuery(['get-all-posts'], getAllPosts)

  // to display posts in searching and non-searching or category conditions.
  const [displayed, setDisplayed] = useState([])

  // get state context with this method.
  const { query, setQuery } = useValue()

  // use this state as react-router-dom to read and write to URL with query search.
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => { 
    setDisplayed(allPosts) 
    setSearchParams(query)
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