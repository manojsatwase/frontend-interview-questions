import React from 'react'

import "./App.css";

import PhoneOtpForm from './components/phone-login';

const App = () => {
  return (
    <div className='App'>
      <h1>Login with Phone</h1>
      <PhoneOtpForm />
    </div>
  )
}

export default App;