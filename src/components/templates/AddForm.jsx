import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

import { getCategories } from "src/services/admin"

function AddForm() {

    const [form, setForm] = useState({ title: '', description: '', amount: null, city: '', category: '', image: null })

    const { data, isLoading } = useQuery(['get-categories'], getCategories)

    const changeHandler = e => {

        const name = e.target.name

        if (name !== 'image') {
            setForm({ ...form, [name]: e.target.value })
        } else {
            setForm({ ...form, [name]: e.target.files[0] })
        }

        console.log(form);
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(form);
    }

    return (
        <div>
            <form onSubmit={submitHandler} onChange={changeHandler}>
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