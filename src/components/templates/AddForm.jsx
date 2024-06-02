import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

import { getCategories } from "src/services/admin"
import { getCookie } from "src/utils/cookies"

function AddForm() {

    const [form, setForm] = useState({ title: '', content: '', amount: null, city: '', category: '', images: null })

    const { data } = useQuery(['get-categories'], getCategories)

    const changeHandler = e => {

        const name = e.target.name

        if (name !== 'images') {
            setForm({ ...form, [name]: e.target.value })
        } else {
            setForm({ ...form, [name]: e.target.files[0] })
        }
    }

    const submitHandler = e => {

        e.preventDefault()

        const formData = new FormData()
        for (let i in form) {
            console.log(i, form[i])
           formData.append(i, form[i])
        }

        const accessToken = getCookie('accessToken')

        axios
        .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `bearer ${accessToken}`
            }
        })
            .then(res => toast(res.data.message) )
            .catch(error => toast('!مشکلی پیش امده است!'))
    }

    return (
        <div>
            <form onSubmit={submitHandler} onChange={changeHandler}>
                <h3>افزودن آگهی</h3>
                <label htmlFor="title">عنوان</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="content"></label>
                <textarea name="content" id="content" rows={10} cols={30} />
                <label htmlFor="amount">قیمت</label>
                <input type="number" name="amount" id="amount" />
                <label htmlFor="city">شهر</label>
                <input type="text" name="city" id="city" />
                <select name="category" id="category">
                    {data?.data.map(item => <option key={item._id} value={item._id}>
                        {item.name}
                    </option>)}
                </select>
                <label htmlFor="images">عکس</label>
                <input type="file" name="images" id="images" />
                <button onSubmit={submitHandler} >ایجاد</button>
            </form>
        </div>
    )
}

export default AddForm