import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
    const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={`${isDark ? "text-black bg-white" : "text-white bg-black"} h-screen`} >
      <Navbar/>
    </div>
  )
}

export default App