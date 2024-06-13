import { useValue } from 'src/context/ProductsProvider'
import styles from './Searchbox.module.css'


function Searchbox() {

  const { query } = useValue()
  console.log('query is:', query)
  return (
    <div className={styles.searchBox}>
    <input type="text" name="" id="" placeholder='جستجو در همهً آگهی ها' />
    <img src="../public/assets/search.svg" alt="search" />
  </div>
  )
}

export default Searchbox