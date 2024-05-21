import { checkOtp } from "../../services/auth"

import { setCookie } from '../../utils/cookie'


function CheckOtpForm({ code, setCode, mobile, setStep }) {

  const submitHandler = async (e) => {
    e.preventDefault()

    // validation //libery
    if (code.toString().length !== 5) return

    const { response, error } = await checkOtp(mobile, code)
    if (response) {
      setCookie(response.data)
    } else {
      console.log(error.response.data.message);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <h4>ورود به حساب کاربری</h4>
      <p>کد تأیید را وارد کنید</p>
      <label htmlFor="inputCode">کد پیامک‌شده به شمارۀ {mobile} .را وارد کنید</label>
      <input type="number" id="inputCode" placeholder="کد را وارد کنید" value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={() => setStep(1)}>تغییر شمارهٔ موبایل</button>
      <button>درخواست کد</button>
      <button type="submit">ورود</button>
    </form>
  )
}

export default CheckOtpForm