import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { addCategory } from "src/services/admin"

import styles from './CategoryForm.module.css'


function CategoryForm() {

    const queryClient = useQueryClient()

    const [form, setForm] = useState({ name: '', slug: '', icon: '' })

    const { mutate, data, error, isLoading, isSuccess } = useMutation(addCategory, {
        onSuccess: () => queryClient.invalidateQueries('get-categories')
    })

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
            <form onSubmit={submitHandler} onChange={changeHandler} className={styles.form}>
                <label htmlFor="name">نام دسته بندی</label>
                <input type="text" name="name" id="name" placeholder="" />
                <label htmlFor="slug">اسلاگ دسته بندی</label>
                <input type="text" name="slug" id="slug" placeholder="" />
                <label htmlFor="icon">ایکون دسته بندی</label>
                <input type="text" name="icon" id="icon" placeholder="" />
                <button onSubmit={submitHandler} disabled={isLoading}>ایجاد</button>
            </form>
        </div>
    )
}

export default CategoryForm