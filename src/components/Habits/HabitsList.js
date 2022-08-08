import { useEffect } from "react"
import styled from "styled-components"
import { getHabits } from "../../service/trackitService"
import HabitUser from "./HabitUser"

export default function HabitsList({habits, setHabits}) {

    useEffect(() => {
        getHabits()
        .then((res) => setHabits(res.data))
        .catch(() => alert('Algo deu errado!'))
        
        // eslint-disable-next-line
    }, [])


    return (        
        <HabitsContent>
            {habits.length === 0 ? (
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>) :
                
                (habits.map((value, index) => (
                    <HabitUser key={index} habitId={value.id} name={value.name} days={value.days} setHabits={setHabits}/>                    
                )))}
                  
        </HabitsContent>        
    )
}

const HabitsContent = styled.div`   
   margin-top: 18px;
   
   h2 {
      color: #666666;
   }
`