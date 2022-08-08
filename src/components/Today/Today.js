import Footer from "../Footer"
import Header from "../Header"
import HabitsToday from "./HabitsToday"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import { useContext, useEffect } from "react"
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

         // eslint-disable-next-line
    }, [habitsToday])
    
    function percentage() {
        const done = habitsToday.filter(value => value.done).length;
        const total = habitsToday.length;

        return ((done/total) * 100).toFixed(0)       
    }
    
    return (
        <>
         <Header />
            
            <DateTitle>
                <h2>{date}</h2>

                <Progress done={habitsToday.filter(value => value.done).length > 0}>
                    
                    {habitsToday.filter(value => value.done).length > 0 ? (`${percentage()}% dos hábitos concluidos`) : 
                    ('Nenhum hábito concluído ainda')
                    }
                    
                </Progress>
             
            </DateTitle>

            {habitsToday.map((value, index) => (
                <HabitsToday 
                key={index}
                id={value.id}
                status={value.done}
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
    color: ${props => props.done ? '#8FC549;' : '#BABABA;'}
`