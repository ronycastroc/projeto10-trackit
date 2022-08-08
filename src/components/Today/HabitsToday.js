import styled from "styled-components"
import Ok from '../../assets/img/Done.png'
import { useState } from "react"
import { habitCheck, habitUncheck } from "../../service/trackitService"

export default function HabitsToday({ id, name, status, currentSequence, highestSequence }) {
    
    const [check, setCheck] = useState(status); 
    const [current, setCurrent] = useState(currentSequence);
    const [highest, setHighest] = useState(highestSequence);
    
    function done() {

        if(!check) {
            setCheck(true)
            habitCheck(id);
            setCurrent(current + 1);
            
            if(current === highest) {
                setHighest(highest + 1)
            }           

        } else {
            setCheck(false)
            habitUncheck(id);
            setCurrent(current - 1);
            setHighest(highest - 1)
        }
    }
    
    return (
        <BoxToday check={check}>
            <h2>{name}</h2>
                <Current check={check}>
                    <span>Sequência atual: </span> 
                    <p>{current} {current <= 1 ? 'dia' : 'dias'}</p>
                </Current>

                <Current check={current === highest && highest !== 0 ? true : false}>
                    <span>Seu recorde: </span> <p>{highest} {highest <= 1 ? 'dia' : 'dias'}</p>
                </Current>
            

            <Done check={check} onClick={done}>
                <img src={Ok} alt="ok" />
            </Done>
        </BoxToday>
    )
}

const BoxToday = styled.div`
    background-color: #FFFFFF;
    margin: 0 auto;
    border-radius: 5px;
    width: 90%;
    height: 95px;
    margin-bottom: 10px;
    position: relative;

    h2 {
        font-size: 20px;
        margin-left: 15px;
        padding-top: 13px;
        color: #666666;
    }
  
`

const Done = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.check ? '#8FC549;' : '#EBEBEB'};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

    const Current = styled.div`
        font-size: 13px;
        margin-left: 15px;
        margin-top: 6px;
        color: #666666;
        display: flex;

        span {
            font-size: 13px;
            color: #666666;
        }

        p {
            margin-left: 2px;
            color: ${props => props.check ? '#8FC549;' : '#666666;'};
        }
    `