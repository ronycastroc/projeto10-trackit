import styled from "styled-components"
import trash from '../../assets/img/Trash.png'
import { deleteHabits, getHabits } from "../../service/trackitService"

export default function HabitUser({ habitId, name, days, setHabits}) {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    function deleteHabit() {
        const result = window.confirm('Tem certeza que deseja excluir esse hábito?')

        if(result === true) {
            deleteHabits(habitId)
            .then(() => {
                alert('Hábito deletado com sucesso!')                
                getHabits()
                    .then((res) => setHabits(res.data))               
            })
        }
    }

    return (
        <UserHabit>
            <h2>{name}</h2>
            <img src={trash} alt="trash" onClick={deleteHabit}/>
            
            <Days>
                {weekdays.map((value, index) => (                    
                    <Day key={index} state={days.indexOf(index) === -1}>{value}</Day>
                ))}
            </Days>
        </UserHabit>
    )
}

const UserHabit = styled.div`
   margin: 0 auto;
   background-color: #FFFFFF;
   width: 100%;
   height: 90px;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   position: relative;
   margin-bottom: 10px;

   h2 {
    margin-top: 15px;
    margin-left: 15px;
   }

   img {
    width: 15px;
    height: 18px;
    position: absolute;
    right: 10px;
    top: 10px; 
    cursor: pointer;  
}
`

const Days = styled.div`
   display: flex;
   position: absolute;
   left: 15px;
   top: 45px;

`

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: ${props => props.state ? ('#FFFFFF') : ('#D4D4D4')};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.state ? ('#D4D4D4') : ('#FFFFFF')};;
    margin-right: 5px;  
        
`