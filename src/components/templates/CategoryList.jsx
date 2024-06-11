import { useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteCategory, getCategories } from "src/services/admin"


function CategoryList() {

    const { data, isLoading } = useQuery(['get-categories'], getCategories)

    const queryClient = useQueryClient()

    const deleteHandler = async (id) => {
        const response = await deleteCategory(id)
        if (!!response) {
            await queryClient.invalidateQueries(
                { queryKey: ['get-categories'], }
            )
        }
    }

    console.log(data, isLoading);
    return (
        <div>
            <ul>
                {data ? data.data.map(item => <li key={item._id}>

                    <h5>{item.name}</h5>
                    <p>{item.slug}</p>
                    <img src={`${item.icon}.svg`} />
                    <button onClick={() => deleteHandler(item._id)}>حذف</button>
                </li>) : ''}
            </ul>
        </div>
    )
}

export default CategoryList