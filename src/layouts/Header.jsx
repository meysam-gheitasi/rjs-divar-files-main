import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <a className={styles.btn} href="/">
        <img src="../public/divar.svg" alt="" />
      </a>
      <hr />
      <button className={styles.svgIcon}>
        <a href="/">
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
        <input type="text" name="" id="" placeholder='جستجو در همهً آگهی ها' />
        <img src="../public/assets/search.svg" alt="search" />
      </div>
      <button className={styles.svgIcon}>
        <a href="/">
          <img src="../public/assets/user.svg" alt="user" />
          <span>
            دیوار من
          </span>
        </a>
      </button>
      <button className={styles.svgIcon}>
        <a href="/">
          <img src="../public/assets/chat.svg" alt="user" />
          <span>
            چت
          </span>
        </a>
      </button>
      <button className={styles.svgIcon}>
        <a href="/">
          <img src="../public/assets/patch-question.svg" alt="user" />
          <span>
            پشتیبانی
          </span>
        </a>
      </button>
      <button className={styles.svgIcon}>
        <a href="/">
          <img src="../public/assets/globe-americas.svg" alt="user" />
          <span>
            Fa
          </span>
        </a>
      </button>
      <div className={styles.advertBtn}>
        <a href="/">
          <button type="submit" className={styles.formBtn}>ثبت آگهی</button>
        </a>
      </div>
    </div>
  )
}

export default Header