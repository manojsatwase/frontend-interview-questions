import "./App.css";

import { CHECKOUT_STEPS } from './components/helper';
import CheckoutStepper from './components/stepper';

const App = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig = {CHECKOUT_STEPS} />
    </div>
  )
}

export default App;