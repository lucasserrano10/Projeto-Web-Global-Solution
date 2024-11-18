import styled from "styled-components"
import FaixaVerde from "../components/FaixaVerde"
import Quiz from "../components/Quiz";

const Container = styled.div`
    padding-top: 50px
`;

const Desafio = () => {
    return (
    <>
        <Container>
            <FaixaVerde titulo="Desafio - Game" paragrafo="Através deste jogo, você aprenderá sobre energia e sustentabilidade de maneira divertida. Com desafios interativos, você entenderá a importância da transição para fontes renováveis e como ela impacta o futuro sustentável."/>
        </Container>
        <Quiz/>
    </>
    )
}

export default Desafio
