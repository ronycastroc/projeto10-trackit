import Footer from "../Footer"
import Header from "../Header"
import HabitsToday from "./HabitsToday"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import { useContext, useEffect, useState } from "react"
import { getHabitsToday } from "../../service/trackitService"
import styled from "styled-components"
import UserContext from "../../context/UserContext"



export default function Today() {
    const date = dayjs().locale('pt-br').format(`dddd, DD/MM`)
    const { habitsToday, setHabitsToday} = useContext(UserContext)
    

    useEffect(() => {
        getHabitsToday()
        .then((res) => setHabitsToday(res.data))
        .catch(() => alert('Algo deu errado')) 
        console.log(habitsToday)

        // eslint-disable-next-line
    }, [])
    
    
    return (
        <>
         <Header />
            
            <DateTitle>
                <h2>{date}</h2>

                <Progress>Nenhum hábito concluido ainda</Progress>
            </DateTitle>

            {habitsToday.map((value, index) => (
                <HabitsToday 
                key={index}
                id={value.id}
                name={value.name}
                currentSequence={value.currentSequence}
                highestSequence={value.highestSequence}
                />
            ))}

         <Footer />
        </>        
    )
}

const DateTitle = styled.div`
    h2 {
        margin-top: 30px;
        margin-left: 20px;
        color: #126BA5;
        font-size: 23px;
    }
`
const Progress = styled.h3`
    margin-top: 5px;
    margin-left: 20px;
    margin-bottom: 30px;
    color: #BABABA;
`