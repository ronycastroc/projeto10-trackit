import styled from "styled-components"
import logo from '../assets/img/TrackIt.svg'

export default function Header() {

    return (
        <Top>
            <Logo src={logo} alt="logo" />
            <ImgPerfil src={JSON.parse(localStorage.getItem("perfil"))} alt="" />
        </Top>
    )
}

const Top = styled.div`
    background-color: #126BA5;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    position: relative;
    z-index: 1;
`
const Logo = styled.img`
    position: absolute;
    left: 15px;    
`
const ImgPerfil = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    right: 15px;
`