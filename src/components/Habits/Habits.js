import { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import HabitsList from "./HabitsList";
import { postHabits, getHabits } from "../../service/trackitService";




export default function Habits() {
   const [create, setCreate] = useState(true);
   const [name, setName] = useState('');
   const [days, setDays] = useState([]);   
   const [habits, setHabits] = useState([])

const weekdays = [
   {
      day: 'D',
      id: 0,
      isAvailable: true
   },

   {
      day: 'S',
      id: 1,
      isAvailable: true
   },

   {
      day: 'T',
      id: 2,
      isAvailable: true
   },

   {
      day: 'Q',
      id: 3,
      isAvailable: true
   },

   {
      day: 'Q',
      id: 4,
      isAvailable: true
   },

   {
      day: 'S',
      id: 5,
      isAvailable: true
   },

   {
      day: 'S',
      id: 6,
      isAvailable: true
   }
]

const [selected, setSelected] = useState(weekdays);

   function sendForm(e) {
      e.preventDefault();

      const body = {
         name,
         days
      }
      
      if(name === '' && days.length === 0) {
         alert('Dê um nome ao novo hábito e selecione algum dia da semana antes de prosseguir.');

      } else {
         postHabits(body)
         .then(() => {
            resetForm()
            getHabits()
            .then((res) => setHabits(res.data))
            .catch(() => alert('Algo deu errado, tente novamente.'));            
         })
         .catch(() => alert('Algo deu errado tente novamente.'));
         
      }
      
   }

   function resetForm() {
      setName('')
      setDays('')
      setSelected(weekdays)
      setCreate(true)
  }  

    return (
      <>
         <Header />
            
         <MyHabits>
            <h1>Meus hábitos</h1>
            <div onClick={() => {
               setCreate(false);
            }}>+</div>
         </MyHabits>
         
         <Content>
            {create ? ('') : 
            (
            <CreateHabit>
               <input type="text" name="" placeholder="nome do hábito"
               value={name} 
               onChange={(e) => setName(e.target.value)}
               />
            
            <Days>
              {selected.map((value, index) => (
               <Day key={index} state={value.isAvailable}
               onClick={() => select(value)}
               >
                  {value.day}                  
               </Day>
              ))}
            </Days>

            <Cancel onClick={() => {
               setCreate(!create)
            }}>
               Cancelar
            </Cancel>

            <Save onClick={sendForm}>
               Salvar
            </Save>

            </CreateHabit>)}    

            <HabitsList habits={habits} setHabits={setHabits}/>
         
         </Content>
         

         <Footer />
      </>
    )

    function select(value) {
      if (days.includes(value.id)) {
         value.isAvailable = true;
         let removed = days.indexOf(value.id);
         days.splice(removed, 1);
         setDays([...days]);

      } else {
         value.isAvailable = false
         setDays([...days, value.id]);
      }
   }

}

const MyHabits = styled.div`
   
   width: 100%;
   height: 80px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   div {
      background-color: #52B6FF;
      width: 40px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 18px;
      border-radius: 5px;
      color: #FFFFFF;
      font-size: 25px;
   }

   h1 {
      margin-left: 18px;
      color: #126BA5;
      font-size: 1.2rem;
   }
`

const Content = styled.div`
   width: 90%;
   margin: 0 auto;

`


const CreateHabit = styled.div`
   margin: 0 auto;
   background-color: #FFFFFF;
   width: 100%;
   height: 180px;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   position: relative;

   input {
      width: 90%;
      height: 45px;
      border-radius: 5px;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      font-size: 1rem;
      margin-top: 15px;
      margin-left: 18px;
   }

   input::placeholder {
      padding-left: 5px;
      font-size: 1rem;
      color: #D4D4D4;
   }

   input:focus {
      outline-color: #52B6FF;
   } 
`

const Days = styled.div`
   margin-top: 8px;
   display: flex;
   position: absolute;
   left: 18px;
   top: 60px;

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


const Cancel = styled.div`
   background-color: #FFFFFF;
   width: 84px;
   height: 35px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   position: absolute;
   bottom: 8px;
   right: 105px;
   color: #52B6FF;
   font-size: 0.95rem;
`

const Save = styled.div`
   background-color: #52B6FF;
   width: 84px;
   height: 35px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   position: absolute;
   bottom: 8px;
   right: 8px;
   color: #FFFFFF;
   font-size: 0.95rem;
`

