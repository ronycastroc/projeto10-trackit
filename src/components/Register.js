import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import { postRegister } from "../service/trackitService"
import { ContentLogin, Background } from "./Login"
import Logo from "./Logo"

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function sendForm(e) {
      
      e.preventDefault()

      const body = {
        email,
        name,
        image,
        password
      }      

      postRegister(body).then(() => {
        navigate('/')        
        resetForm()
        setLoading(!loading)
      }).catch(() => {
        alert('Algo deu errado tente novamente')
        resetForm()
        setLoading(!loading)
      })

    }

    function resetForm() {
      setEmail('')
      setPassword('')
      setName('')
      setImage('')
    }

    return (
      <Background>
        <Logo />

        <form onSubmit={sendForm}>
          <ContentLogin>
            <input type="email" name="email" 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            disabled={loading}
            />
               
            <input type="password" name="password"
            placeholder="senha" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            disabled={loading}
            />

            <input type="text" name="name" 
            placeholder="nome" 
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            disabled={loading}
            />  

            <input type="url" name="url" 
            placeholder="url foto" 
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
            disabled={loading}
            />   

            <button>
              <div onClick={() => setLoading(!loading)}>
                {loading ?               
                (<ThreeDots color="#ffffff" height={50} width={50} />) : 
                ('Cadastrar')}                     
              </div>
            </button>

            <Link to={'/'}>
              <p>Já tem uma conta? Faça login!</p>
            </Link>               
          </ContentLogin>
        </form>
      </Background>
    )
}