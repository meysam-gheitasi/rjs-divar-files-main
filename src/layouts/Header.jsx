import { useValue } from 'src/context/ProductsProvider'
import styles from './Header.module.css'
import { createQueryObject } from 'src/utils/searchs'

function Header() {

  const { search, setSearch, query, setQuery } = useValue()

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase().trim())
    setQuery((query) => createQueryObject(query, { search }))
  }

  return (
    <div className={styles.container}>
      <a className={styles.btn} href="/">
        <img src="../public/divar.svg" alt="" />
      </a>
      <hr />
      <button className={styles.svgIcon}>
        <a className={styles.notAllowed} href="/">
          <img src="../public/assets/location.svg" alt="location" />
          <span>
            تهران
          </span>
        </a>
      </button>
      <button className={styles.svgIcon}>
        <a href="/">
          <span>
            دسته ها
          </span>
          <img src="../public/assets/caret-down.svg" alt="caret-down" />
        </a>
      </button>
      <div className={styles.searchBox}>
        <input value={search} onChange={searchHandler} type="text" placeholder='جستجو در همهً آگهی ها' />
        <img src="../public/assets/search.svg" alt="search" />
      </div>
      <button className={styles.svgIcon}>
        <a href="/dashboard">
          <img src="../public/assets/user.svg" alt="user" />
          <span>
            دیوار من
          </span>
        </a>
      </button>
      <button className={styles.svgIcon}>
        <a className={styles.notAllowed} href="/">
          <img src="../public/assets/chat.svg" alt="user" />
          <span>
            چت
          </span>
        </a>
      </button>
      <button className={styles.svgIcon}>
        <a className={styles.notAllowed} href="/">
          <img src="../public/assets/patch-question.svg" alt="user" />
          <span>
            پشتیبانی
          </span>
        </a>
      </button>
      <button className={styles.svgIcon}>
        <a className={styles.notAllowed} href="/">
          <img src="../public/assets/globe-americas.svg" alt="user" />
          <span>
            Fa
          </span>
        </a>
      </button>
      <div className={styles.advertBtn}>
        <button className={styles.formBtn}>
          <a href="/registrationAD">
            ثبت آگهی
          </a>
        </button>
      </div>
    </div>
  )
}

export default Header