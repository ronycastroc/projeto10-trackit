import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "./Logo"

export default function Login() {
    return (
      <>     
         <Logo />

         <form>
            <ContentLogin>         
               <input type="email" name="email" id="" placeholder="email"/>
               <input type="password" name="password" id="" placeholder="senha" />    

               <button>Entrar</button>

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

   p {
      margin-top: 15px;
      font-size: 0.8rem;
      text-align: center;
   }
`