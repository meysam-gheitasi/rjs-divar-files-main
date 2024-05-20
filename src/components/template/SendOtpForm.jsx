import { sendOtp } from "../../services/auth"

function SendOtpForm({ mobile, setMobile, setStep }) {

    const submitHandler = async (e) => {
        e.preventDefault()

        // validation //libery
        if(mobile.length !== 11)  return

        const { response, error } = await sendOtp(mobile)
    
        if(response) {
            setStep(2)
        } else {
            console.log(error.response.data.message);
        }

    }
    return (
        <form onSubmit={submitHandler}>
            <p>ورود به حساب کاربری</p>
            <label htmlFor="inputNumber">شماره موبایل خود را وارد کنید</label>
            <input type="number" id="inputNumber" placeholder="شماره موبایل" value={mobile} onChange={e => setMobile(e.target.value)} />
            <button type="submit">ارسال کد تایید</button>
        </form>
    )
}

export default SendOtpForm