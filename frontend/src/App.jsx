import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Dashboard from "./components/Dashboard"
import SendMoney from "./components/SendMoney"
import Confirmation from "./components/Confirmation"
import Landing from "./components/Landing"
function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/sendMoney' element={<SendMoney />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/' element={<Landing />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
