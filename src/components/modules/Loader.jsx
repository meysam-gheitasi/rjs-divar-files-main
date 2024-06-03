import styles from './Loader.module.css'
function Loader() {
  return (
    <div className={styles.contaienr}>
        <span className={styles.loader}></span>
    </div>
  )
}

export default Loader