import { useQuery } from "@tanstack/react-query"
import { getCategories } from "src/services/admin"

function Sidebar() {

    const { data } = useQuery(['get-categories'], getCategories)

  return (
        <div>
            <h4>تمام دسته بندی ها</h4>
           <ul>
           {data?.data.map(item => (
                <li key={item._id}>
                    <img src={`${item.icon}.svg`} alt={`${item.name}`} />
                    <p>{item.name}</p>
                </li>
            ))}
           </ul>
        </div>
    )
}

export default Sidebar