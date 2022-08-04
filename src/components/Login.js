import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "./Logo"
import { ThreeDots } from 'react-loader-spinner'
import { useState } from "react"
import { postLogin } from "../service/trackitService"

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    function sendForm(e) {
      e.preventDefault()

      const body = {
        email,
        password
      }

      postLogin(body)
      .then(res => {
        console.log(res.data)
        resetForm()
        setLoading(!loading)
        navigate('/')
      })
      .catch(() => {
        alert('Seu usuário ou senha estão incorretos.')
        resetForm()
        setLoading(!loading)
      })

    }

    function resetForm() {
      setEmail('')
      setPassword('')
    }

    return (
      <>     
         <Logo />

         <form onSubmit={sendForm}>
            <ContentLogin>         
               <input type="email" name="email" id="" placeholder="email" disabled={loading}
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               required
               />

               <input type="password" name="password" id="" placeholder="senha" disabled={loading}
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               required
               />    

               <button>
                  <div onClick={() => setLoading(!loading)}>
                     {loading ?                      
                     (<ThreeDots color="#ffffff" height={50} width={50} />) :
                     ('Entrar')}                     
                  </div>
               </button>

               <Link to={'/register'}>
                  <p>Não tem uma conta? Cadastre-se</p>
               </Link>               
            </ContentLogin>        
         </form>     
      </>
    )
}

const ContentLogin = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 80%;
   margin: 0 auto;

   input {
      height: 45px;
      margin-bottom: 5px;
      border-radius: 5px;
      border: 1px solid #D5D5D5;
      font-size: 1rem;
   }

   input:focus {
      outline-color: #52B6FF;
   } 

   input::placeholder{
      font-size: 1rem;
      margin-left: 5px;
      padding-left: 5px;
   }

   button {
      background-color: #52B6FF;
      height: 45px;
      border: none;
      border-radius: 5px;
      font-size: 1.1rem;
      color: white;
   }

   button div {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   p {
      margin-top: 15px;
      font-size: 0.8rem;
      text-align: center;
      margin-bottom: 50px;
   }
`

export { ContentLogin }