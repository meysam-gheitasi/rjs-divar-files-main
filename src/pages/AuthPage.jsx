import { useState } from "react"
import styles from './AuthPage.module.css'

// Components form OTP part
import CheckOtpForm from "components/templates/CheckOtpForm"
import SendOtpForm from "components/templates/SendOtpForm"

function AuthPage() {

  // Use to condition of displaying which form
  const [step, setStep] = useState(1)

  // Get users phone number
  const [mobile, setMobile] = useState('')

  // Get OTP code to server
  const [code, setCode] = useState('')

  return (
    <div className={styles.container}>
      {step === 1 && <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />}
      {step === 2 && <CheckOtpForm setStep={setStep} mobile={mobile} code={code} setCode={setCode} />}
    </div>
  )
}

export default AuthPage