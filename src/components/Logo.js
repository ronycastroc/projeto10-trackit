import styled from "styled-components"
import logo from '../assets/img/Group 8.svg'

export default function Logo() {
    return (
        <Image>
            <img src={logo} alt="" />
        </Image>     
    )
}

const Image = styled.div`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;

`

