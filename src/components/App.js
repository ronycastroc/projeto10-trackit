import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../assets/styles/globalStyles"
import Login from "./Login"
import Register from "./Register"
import Today from "./Today"



export default function App() {
    return (
        <>
          <GlobalStyle />
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/today' element={<Today />}/>
              </Routes>
            </BrowserRouter>
        </>
    )
}