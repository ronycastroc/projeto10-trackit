import Footer from "./Footer"
import Header from "./Header"
import styled from "styled-components"

export default function History() {
    return (
      <>
         <Header />
          <HistoryTitle>
            <h2>Histórico</h2>
            <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
          </HistoryTitle>

         <Footer />
      </>
    )
}

const HistoryTitle = styled.div`
  h2 {
    color: #126BA5;
    font-size: 23px;
    margin-top: 30px;
    margin-left: 18px;
  }

  h3 {
    color: #666666;
    font-size: 18px;
    margin-top: 15px;
    margin-left: 18px;
  }
`