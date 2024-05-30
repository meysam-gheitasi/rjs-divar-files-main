import { sendOtp } from "../../services/auth"
import styles from './SendOtpForm.module.css'

function SendOtpForm({ mobile, setMobile, setStep }) {

    const submitHandler = async (e) => {
        e.preventDefault()

        // validation //libery
        if (mobile.length !== 11) return

        const { response, error } = await sendOtp(mobile)

        if (response) {
            setStep(2)
        } else {
            console.log(error.response.data.message);
        }

    }
    return (
            <div className={styles.logModal} >
                <header className={styles.logModalHeader}>
                    <div className="log-modal_title-box">ورود به حساب کاربری</div>
                    <button className="log-modal_close-button">icon</button>
                </header>
                <div className={styles.logModalContants}>
                    <div className={styles.logModalBody}>
                        <div className={styles.authContent}>
                            <p className={styles.authContentTitle}>شمارهٔ موبایل خود را وارد کنید</p>
                            <p className={styles.authContentMessage}>برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.</p>
                            <form onSubmit={submitHandler} className={styles.form}>
                                <div className={styles.formInput}>
                                <input type="number" id="inputNumber" placeholder="شماره موبایل" value={mobile} onChange={e => setMobile(e.target.value)} />
                                <p>+98</p>
                                </div>
                                <label htmlFor="inputNumber"><a href="">شرایط استفاده از خدمات</a> و <a href="/">حریم خصوصی</a> دیوار را می‌پذیرم.</label>
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