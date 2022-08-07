import styled from "styled-components";
import {  buildStyles, CircularProgressbar  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useNavigate } from "react-router-dom";


export default function Footer() {
    const navigate = useNavigate()

    function today() {
        navigate('/today')
    }

    return (        
        <Bot>
            <Link to='/habit'><p>Hábitos</p></Link>
                
                <Example label="Background" onClick={today}>
                    <CircularProgressbar     
                        value={60}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        
                        })}                 
                />
                </Example>

                <Link to='/history'><p>Histórico</p></Link>
            
        </Bot>
    )    
}

const Bot = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;

    p {
        color: #52B6FF;
    }

    a {
        text-decoration: none;
    }
    
`

const Example = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    bottom: 10px;    
`