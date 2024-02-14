import { useState } from "react";

import OtpInput from "./otp-input";

const PhoneOtpForm = () => {
 const [phoneNumber,setPhoneNumber] = useState("");
 const [showOtpInput,setShowOptInput] = useState(false);

 const handlePhoneNumber = ({target:{value}}) => {
    setPhoneNumber(value);
 }

 const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // phone validations

    const regex = /[^0-9]/g;
    if(phoneNumber.length < 10 || regex.test(phoneNumber)){
        return alert("invalid phone number")
    }
    if(phoneNumber.length !== 10){
        return alert("number should be 10 digits");
    }
    // Call Be API
    // show OTP filed
    setShowOptInput(true);
 }

 const onOtpSubmit = (otp) => {
   console.log("Login Successful", otp);
 }

  return (
    <div>
       {
        !showOtpInput ? (
            <form onSubmit={handlePhoneSubmit}>
            <input 
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
             placeholder="Enter Phone Number"
             />
             <button type="submit">submit</button>
        </form>
        ) : (
            <div>
                <p>Enter OTP sent to {phoneNumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </div>
        )
       }
    </div>
  )
}

export default PhoneOtpForm;