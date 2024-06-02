import { sp } from "src/utils/nombers";

import styles from './Main.module.css'

// eslint-disable-next-line react/prop-types
function Main({ allPosts }) {
    
    const baseURL = import.meta.env.VITE_BASE_URL;

    return (
        <div className={styles.container}>
            {
                // eslint-disable-next-line react/prop-types
                allPosts.data.posts.map(item => (
                    <div key={item._id} className={styles.card}>
                        <div className={styles.body}>
                            <p>{item.options?.title}</p>
                            <div>
                                <p>{sp(item.amount)}</p>
                                <span>{item.options?.city}</span>
                            </div>
                        </div>
                        <img src={`${baseURL}${item.images[0]}`} alt={item.title} />
                    </div>
                ))
            }
        </div>
    )
}

export default Main