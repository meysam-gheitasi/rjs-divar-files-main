import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <a className={styles.btn} href="/">
        <img src="../public/divar.svg" alt="" />
      </a>
      <hr />
      <button className={styles.svgIcon}>
        <img src="../public/assets/location.svg" alt="location" />
        <span>
          تهران
        </span>
      </button>
      <button className={styles.svgIcon}>
        <span>
          دسته ها
        </span>
        <img src="../public/assets/caret-down.svg" alt="caret-down" />
      </button>
      <div className={styles.searchBox}>
        <input type="text" name="" id="" placeholder='جستجو در همهً آگهی ها' />
        <img src="../public/assets/search.svg" alt="search" />
      </div>
      <button className={styles.svgIcon}>
        <img src="../public/assets/user.svg" alt="user" />
        <span>
          دیوار من
        </span>
      </button>
      <button className={styles.svgIcon}>
        <img src="../public/assets/chat.svg" alt="user" />
        <span>
          چت
        </span>
      </button>
      <button className={styles.svgIcon}>
        <img src="../public/assets/patch-question.svg" alt="user" />
        <span>
          چت
        </span>
      </button>
      <button className={styles.svgIcon}>
        <img src="../public/assets/globe-americas.svg" alt="user" />
        <span>
          Fa
        </span>
      </button>
      <div className={styles.advertBtn}>
        <button type="submit" className={styles.formBtn}>ثبت آگهی</button>
      </div>
    </div>
  )
}

export default Header