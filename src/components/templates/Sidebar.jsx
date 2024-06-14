
import { useValue } from 'src/context/ProductsProvider'
import styles from './Sidebar.module.css'

// eslint-disable-next-line react/prop-types
function Sidebar({ categories }) {

    const { query, setQuery } = useValue()

    const categoryHandler = (e) => {

        const liElementLI = e.target.closest('li')

        const liElementH4 = e.target.closest('h4')

        if (liElementLI) {
            const category = liElementLI.getAttribute('data-id')
            setQuery((query) => ({ ...query, category }))
        }
        else if (liElementH4) {
            setQuery({})
        }
    }


    return (
        <div onClick={categoryHandler} className={styles.sidebar}>
            <h4>تمام دسته بندی ها</h4>
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {categories.data.map(item => (
                    <li key={item._id} data-id={item._id}>
                        <img src={`${item.icon}.svg`} alt={`${item.name}`} />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar