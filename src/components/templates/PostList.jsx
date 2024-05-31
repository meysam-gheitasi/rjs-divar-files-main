import { useQuery } from "@tanstack/react-query"
import { getPosts } from "src/services/user"

function PostList() {

    const {data, isLoading} = useQuery(['get-post-user'], getPosts)
    console.log(data);
  return (
    <div>PostList</div>
  )
}

export default PostList