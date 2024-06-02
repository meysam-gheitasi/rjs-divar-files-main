
import styles from './Sidebar.module.css'

// eslint-disable-next-line react/prop-types
function Sidebar({ categories }) {



    return (
        <div className={styles.sidebar}>
            <h4>تمام دسته بندی ها</h4>
            <ul>
                 {/* eslint-disable-next-line react/prop-types */}
                {categories.data.map(item => (
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