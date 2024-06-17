import { useQuery } from "@tanstack/react-query";
import { getPosts } from "src/services/user";
import Loader from "../modules/Loader";
import { sp } from "src/utils/nombers";

import styles from "./PostList.module.css"

function PostList() {

  const baseURL = import.meta.env.VITE_BASE_URL;

  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
 
  return (
    <div className={styles.list}>
      {
        isLoading
          ? (
            <Loader />
          ) : (
            <>
              <h3>آگهی های شما</h3>
              {
                data.data.posts.map((item) => (
                  <div key={item._id} className={styles.post}>
                    {item.images?.[0] && (
                      <img src={`${baseURL}${item.images[0]}`} alt="" />
                    )}
                    <div>
                        <p>{item.options?.title}</p>
                        <span>{item.options?.content}</span>
                    </div>
                    <div className={styles.price}>
                      <p>{new Date(item.createdAt).toLocaleDateString("fa-Ir")}</p>
                      <span>{sp(item.amount)} تومان</span>
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
