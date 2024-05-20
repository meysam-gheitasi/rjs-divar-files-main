import { useState } from "react"

import CheckOtpForm from "../components/template/CheckOtpForm"
import SendOtpForm from "../components/template/SendOtpForm"

function AuthPage() {
    const [step, setStep] = useState(1)
    const [mobile, setMobile] = useState('')
    const [code, setCode] = useState('')
  return (
    <div>
        {step === 1 && <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />}
        {step === 2 && <CheckOtpForm setStep={setStep} mobile={mobile} code= {code} setCode= {setCode}/>}
    </div>
  )
}

export default AuthPage