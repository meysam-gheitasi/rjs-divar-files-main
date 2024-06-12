import styles from './Searchbox.module.css'

function Searchbox() {
  return (
    <div className={styles.searchBox}>
    <input type="text" name="" id="" placeholder='جستجو در همهً آگهی ها' />
    <img src="../public/assets/search.svg" alt="search" />
  </div>
  )
}

export default Searchbox