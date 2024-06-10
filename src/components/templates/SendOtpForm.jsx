import { p2e } from "src/utils/nombers"
import { sendOtp } from "services/auth"
import styles from './SendOtpForm.module.css'
import toast from "react-hot-toast"

function SendOtpForm({ mobile, setMobile, setStep }) {

    const submitHandler = async (e) => {

        e.preventDefault()

        // Validation length phone number
        if (mobile.length !== 11) return

        const { response } = await sendOtp(mobile)

        if (response) {
            setStep(2)
        } else {
            toast('!مشکلی پیش امده است!')
        }
    }

    return (
        <div className={styles.logModal} >
            <header className={styles.logModalHeader}>
                <div className="log-modal_title-box">ورود به حساب کاربری</div>
                <button className="log-modal_close-button">
                    <a href="/">X</a>
                </button>
            </header>
            <div className={styles.logModalContants}>
                <div className={styles.logModalBody}>
                    <div className={styles.authContent}>
                        <p className={styles.authContentTitle}>
                            شمارهٔ موبایل خود را وارد کنید
                        </p>
                        <p className={styles.authContentMessage}>
                            .برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد
                        </p>

                        <form onSubmit={submitHandler} className={styles.form}>
                            <div className={styles.formInput}>
                                <input type="number" id="inputNumber" placeholder="شماره موبایل" value={mobile} onChange={e => setMobile(p2e(e.target.value))} />
                                <p>+98</p>
                            </div>
                            <label htmlFor="inputNumber">
                                <a href="">شرایط استفاده از خدمات</a> و <a href="/">حریم خصوصی</a> دیوار را می‌پذیرم.
                            </label>
                            <div className={styles.formBtnContainer}>
                                <button type="submit" className={styles.formBtn}>تایید</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendOtpForm