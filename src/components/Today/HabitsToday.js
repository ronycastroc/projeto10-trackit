import styled from "styled-components"

export default function HabitsToday({ id, name, currentSequence, highestSequence }) {
    return (
        <BoxToday>
            <h2>{name}</h2>
            <p>Sequência atual: {currentSequence} {currentSequence < 1 ? 'dia' : 'dias'}</p>
            <p>Seu recorde: {highestSequence} {highestSequence < 1 ? 'dia' : 'dias'}</p>
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

    h2 {
        font-size: 20px;
        margin-left: 15px;
        padding-top: 13px;
        color: #666666;
    }

    p {
        font-size: 13px;
        margin-left: 15px;
        margin-top: 6px;
        color: #666666;
    }
`