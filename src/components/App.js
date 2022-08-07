import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../assets/styles/globalStyles"
import UserContext from "../context/UserContext"
import Login from "./Login"
import Register from "./Register"
import Today from "./Today"
import Habits from "./Habits/Habits"
import History from "./History"

export default function App() {
  const [user, setUser] = useState({})
  

    return (            
            <BrowserRouter>
              <UserContext.Provider value={{user, setUser}}>
                
                  <GlobalStyle />
                  <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/today' element={<Today />}/>
                    <Route path='/habit' element={<Habits />}/>
                    <Route path='/history' element={<History />}/>
                  </Routes>
                
              </UserContext.Provider>
            </BrowserRouter>        
    )
}