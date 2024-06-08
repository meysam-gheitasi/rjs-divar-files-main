import { useNavigate } from "react-router-dom"
import { checkOtp, sendOtp } from "../../services/auth"
import { setCookie } from "../../utils/cookies"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "src/services/user"

import styles from './CheckOtpForm.module.css'
import toast from "react-hot-toast"


function CheckOtpForm({ code, setCode, mobile, setStep }) {

  const { refetch } = useQuery(["profile"], getProfile)
  const navigate = useNavigate()

  const sendCode = async (mobile) => {

    const { response, error } = await sendOtp(mobile)

    if (response) {
      toast('کد تایید جدید ارسال شد ')
    } else {
      toast('!مشکلی پیش امده است!')
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    // validation cdoe
    if (code.toString().length !== 5) return

    const { response } = await checkOtp(mobile, code)
    if (response) {
      toast('ورود با موفقیت انجام شد!')
      setCookie(response.data)
      navigate("/")
      refetch()
    } else {
      toast('!مشکلی پیش امده است!')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <h4>ورود به حساب کاربری</h4>
      <p>کد تأیید را وارد کنید</p>
      <label htmlFor="inputCode">کد پیامک‌شده به شمارۀ {mobile} .را وارد کنید</label>
      <input type="number" id="inputCode" placeholder="کد را وارد کنید" value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={() => setStep(1)}>تغییر شمارهٔ موبایل</button>
      <button onClick={() => sendCode}>درخواست مجدد کد تایید</button>
      <button type="submit">ورود</button>
    </form>
  )
}

export default CheckOtpForm