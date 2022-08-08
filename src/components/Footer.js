import styled from "styled-components";
import {  buildStyles, CircularProgressbar  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";


export default function Footer() {
    const { habitsToday } = useContext(UserContext)

    function percentage() {
        const done = habitsToday.filter(value => value.done).length;
        const total = habitsToday.length;

        return ((done/total) * 100).toFixed(0)       
    }

    return (        
        <Bot>
            <Link to='/habit'><p>Hábitos</p></Link>

            <div>
                <Link to='/today'>
                    <CircularProgressbar     
                        value={habitsToday.length === 0 ? ('0') : (percentage())}
                        text='Hoje'
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        
                        })}                 
                />
                </Link>
            </div>
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

    div {
        width: 90px;
        height: 90px;
        position: absolute;
        bottom: 10px;    
    }
    
`
