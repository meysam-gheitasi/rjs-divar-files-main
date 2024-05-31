import { useQuery } from "@tanstack/react-query"

import { getCategories } from "src/services/admin"

function AddForm() {

    const { data, isLoading } = useQuery(['get-categories'], getCategories)

    const submitHandler = e => {
        e.preventDefault()
        console.log('send');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h3>افزودن آگهی</h3>
                <label htmlFor="title">عنوان</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="description"></label>
                <textarea name="description" id="description" rows={10} cols={30} />
                <label htmlFor="amount">قیمت</label>
                <input type="text" name="amount" id="amount" />
                <label htmlFor="city">شهر</label>
                <input type="text" name="city" id="city" />
                <select name="category" id="category">
                    {data?.data.map(item => <option key={item._id} value={item._id}>
                        {item.name}
                    </option>)}
                </select>
                <label htmlFor="image">عکس</label>
                <input type="file" name="image" id="image" />
                <button onSubmit={submitHandler}>ایجاد</button>
            </form>
        </div>
    )
}

export default AddForm