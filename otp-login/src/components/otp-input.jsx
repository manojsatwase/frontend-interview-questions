import { useEffect, useRef, useState } from "react";

const OtpInput = ({length = 4,onOtpSubmit = ()=>{}}) => {
 const [otp, setOtp] = useState(new Array(length).fill(""));
 const inputRefs = useRef([]);

 const handleChange = (index,{target:{value}})=>{
    if(isNaN(value)) return;
   const newOtp = [...otp]
   // allow only one input
    newOtp[index] = value.substring(value.length -1); // give the last value
    setOtp(newOtp); // this setOtp function is asynchronous function

    // submit trigger
    const combinedOtp = newOtp.join(""); // we don't have the updated value at this point 
    if(combinedOtp.length===length){
        onOtpSubmit(combinedOtp);
    }
   
    // Move to next input if current field is filled
    if(value && index < length-1 && inputRefs.current[index+1]){
        inputRefs.current[index+1].focus();
    }
 };
 const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

const handleKeyDown = (index,e) => {
  if(e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index-1]){
    // Move focus to the previous input field on backspace
    inputRefs.current[index-1].focus();
  }
  // option
  if(index > 0 && !otp[index - 1]){
    inputRefs.current[otp.indexOf()].focus();
  }
};


// as soon as load this component show first input focus
useEffect(()=>{
  if(inputRefs.current[0]){
    inputRefs.current[0].focus();
  }
},[])

  return (
    <div>
        {
            otp.map((value,index)=>(
                <input
                key={index}
                type="text"
                ref={(input) => (inputRefs.current[index] = input)}
                value={value}
                onChange={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="otpInput"
              />
            ))
        }
    </div>
  )
}

export default OtpInput;