import { useQuery } from "@tanstack/react-query"
import Loader from "src/components/modules/Loader"
import Main from "src/components/templates/Main"
import Sidebar from "src/components/templates/Sidebar"
import { getCategories } from "src/services/admin"
import { getAllPosts } from "src/services/user"

const container = { display: 'flex' }

function HomePage() {

  const { data: categories, isLoading: categoriesLoading } = useQuery(['get-categories'], getCategories)
  const { data: allPosts, isLoading: postsLoading } = useQuery(['get-all-posts'], getAllPosts)

  return (
    <>
      {categoriesLoading || postsLoading 
      ?
      <Loader />
      :
        <div style={container}>
          <Sidebar categories={categories} />
          <Main allPosts={allPosts} />
        </div>
      }
    </>
  )
}

export default HomePage