import Dashboard from "./Components/Dashboard.jsx"
import Home from "./Components/Home.jsx"
import HowItWorks from "./Components/HowItWorks.jsx"
import Login from "./Components/Login.jsx"
import Register from "./Components/Register.jsx"

const App = () => {
  return (
    <div className="bg-[#F5F5F5] font-sans">
      {/* <Home/>    */}
      {/* <HowItWorks/>  */}
      <Login/>
      {/* <Register/> */}
      <Dashboard/>
    </div>
  )
}

export default App
