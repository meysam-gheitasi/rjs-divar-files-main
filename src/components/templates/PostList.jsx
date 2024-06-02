import { useQuery } from "@tanstack/react-query";
import { getPosts } from "src/services/user";
import Loader from "../modules/Loader";

function PostList() {

  const baseURL = import.meta.env.VITE_BASE_URL;

  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  console.log(isLoading, data);
  return (
    <div>
      {
        isLoading
          ? (
            <Loader />
          ) : (
            <>
              <h3>آگهی های شما</h3>
              {
                data.data.posts.map((item) => (
                  <div key={item._id}>
                    {item.images?.[0] && (
                      <img src={`${baseURL}${item.images[0]}`} alt="" />
                    )}
                    <div>
                        <p>{item.options?.title}</p>
                        <span>{item.options?.content}</span>
                    </div>
                    <div>
                      <p>{item.createdAt}</p>
                      <span>{item.amount} تومان</span>
                    </div>
                  </div>
                ))
              }
            </>
          )
      }
    </div>
  )
}

export default PostList;
