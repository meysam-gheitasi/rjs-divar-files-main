

function CheckOtpForm({code, setCode, mobile, setStep}) {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(mobile, code);
  }

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد ارسال شده</p>
      <label htmlFor="inputCode">کد ارسال شده به شماره {mobile} را وارد کنید</label>
      <input type="number" id="inputCode" placeholder="کد را وارد کنید" value={code} onChange={ e => setCode(e.target.value)} />
      <button type="submit">ورود</button>
    </form>
  )
}

export default CheckOtpForm