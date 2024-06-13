import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import Loader from "src/components/modules/Loader"
import Main from "src/components/templates/Main"
import Sidebar from "src/components/templates/Sidebar"
import { getCategories } from "src/services/admin"
import { getAllPosts } from "src/services/user"

const container = { display: 'flex' }

function HomePage() {

  const { data: categories, isLoading: categoriesLoading } = useQuery(['get-categories'], getCategories)
  const { data: allPosts, isLoading: postsLoading } = useQuery(['get-all-posts'], getAllPosts)

  const [ displayed, setDisplayed ] = useState([])

  useEffect(() =>  {setDisplayed(allPosts)}, [allPosts])

  return (
    <>
      {categoriesLoading || postsLoading || !!displayed.length
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