import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import cardsData from "../../data/CardsData";
import styled from "styled-components";


const Faixa = styled.div`
  padding-top: 50px;
`;

const Container = styled.div`
  width: 540px;
  margin: auto;
  margin-top: 60px;
  background: white;
  color: #262626;
  border-radius: 10px;
  padding: 40px 50px;
  min-height: 200px; /* Define uma altura mínima */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%; /* Ajusta a largura em telas menores */
    margin-top: 50px;
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 20px 15px;
  }
`;

const Titulo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Paragrafo = styled.div`
  padding-top: 15px;
  font-family: 'Sour Gummy', sans-serif;
  text-align: center;
  font-weight: 300;
  line-height: 1.5; /* Melhora a legibilidade em parágrafos maiores */

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FF6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533c;
  }
`;



const CardDetails = () => {
    const { id } = useParams();
    const card = cardsData.find((card) => card.id === parseInt(id));

    if (!card) {
        return <Navigate to="/" replace/>;
    }

    return (
        <Faixa>
            <Container>
                <Titulo>{card.title}</Titulo>
                <Paragrafo>{card.description}</Paragrafo>
                <Link to="/">
                    <Button>Voltar</Button>
                </Link>
            </Container>
        </Faixa>
    );
};

export default CardDetails;
