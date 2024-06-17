import { useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteCategory, getCategories } from "src/services/admin"

import styles from "./CategoryList.module.css"


function CategoryList() {

    const { data, isLoading } = useQuery(['get-categories'], getCategories)

    const queryClient = useQueryClient()

    const deleteHandler = async (id) => {
       const response =  await deleteCategory(id)
       if(!!response) {
        await queryClient.invalidateQueries(
           { queryKey: ['get-categories'],}
        )
       }
    }

    return (
        <div className={styles.list}>{data ? data.data.map(item => <div key={item._id}>
            <h5>{item.name}</h5>
            <p>{item.slug}</p>
            <img src={`${item.icon}.svg`} />
            <button onClick={() => deleteHandler(item._id)}>حذف</button>
        </div>) : ''}</div>
    )
}

export default CategoryList