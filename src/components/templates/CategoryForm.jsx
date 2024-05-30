import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { addCategory } from "src/services/admin"


function CategoryForm() {

    const [form, setForm] = useState({ name: '', slug: '', icon: '' })

    const { data, error, isLoading, isSuccess, mutate } = useMutation(addCategory)

    console.log({ data, error, isLoading, isSuccess });

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!form.name || !form.slug || !form.icon) return
            mutate(form);
    }

    return (
        <div>
            {isSuccess && <p>دسته بندی با موفقیت ایجاد شد </p>}
            {!!error && <p>مشکلی پیش آمده است</p>}
            <form onSubmit={submitHandler} onChange={changeHandler}>
                <label htmlFor="name">نام دسته بندی</label>
                <input type="text" name="name" id="name" placeholder="" />
                <label htmlFor="slug">اسلاگ دسته بندی</label>
                <input type="text" name="slug" id="slug" placeholder="" />
                <label htmlFor="icon">ایکون دسته بندی</label>
                <input type="text" name="icon" id="icon" placeholder="" />
                <button onSubmit={submitHandler}></button>
            </form>
        </div>
    )
}

export default CategoryForm