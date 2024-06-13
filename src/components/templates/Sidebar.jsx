
import { useValue } from 'src/context/ProductsProvider'
import styles from './Sidebar.module.css'

// eslint-disable-next-line react/prop-types
function Sidebar({ categories }) {

    const { query, setQuery } = useValue()

    const categoryHandler = (e) => {

        const liElement = e.target.closest('li')

        if (liElement) {
            const category = liElement.getAttribute('data-id')
            setQuery((query) => ({ ...query, category }))
        }
    }


    return (
        <div className={styles.sidebar}>
            <h4>تمام دسته بندی ها</h4>
            <ul onClick={categoryHandler}>
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