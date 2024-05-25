import { useNavigate } from "react-router-dom"
import { checkOtp } from "../../services/auth"
import { setCookie } from "../../utils/cookies"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "src/services/user"

import styles from './CheckOtpForm.module.css'


function CheckOtpForm({ code, setCode, mobile, setStep }) {

  const { refetch } = useQuery(["profile"], getProfile)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    // validation //libery
    if (code.toString().length !== 5) return

    const { response, error } = await checkOtp(mobile, code)
    if (response) {
      setCookie(response.data)
      navigate("/")
      refetch()
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