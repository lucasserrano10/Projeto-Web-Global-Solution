import FaixaVerde from "../components/FaixaVerde";
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

const Duvidas = () => {
  return (
    <>
      <Faixa>
        <FaixaVerde
          titulo="Central de Dúvidas"
          paragrafo="Esta seção oferece respostas para as dúvidas mais recorrentes para as principais questões sobre a transição energética"
        />
      </Faixa>
      <Container>
        <Titulo>Sobre a Transição energética</Titulo>
        <Paragrafo>
          A transição energética global é um dos desafios mais urgentes da
          atualidade, com o objetivo de reduzir as emissões de gases de efeito
          estufa e promover o uso sustentável de fontes de energia renováveis.
          Uma das tendências emergentes é a descentralização da produção e
          distribuição de energia, que pode reduzir a dependência das grandes
          empresas de energia e facilitar o acesso a fontes limpas de
          eletricidade, especialmente em comunidades locais. A tecnologia
          blockchain, com sua capacidade de criar registros imutáveis e
          transparentes, oferece uma oportunidade única de transformar a maneira
          como a energia é produzida, distribuída e consumida. Neste contexto,
          uma plataforma descentralizada de energia baseada em blockchain, que
          utiliza tokens como forma de incentivo à produção de energia
          renovável, pode ser a chave para acelerar a transição para um modelo
          energético mais democrático e sustentável. O objetivo deste trabalho é
          explorar os principais aspectos dessa proposta, avaliando os
          mecanismos de negociação, incentivos, impactos socioeconômicos,
          desafios e soluções, comparando-a com os modelos tradicionais de
          energia e discutindo seu potencial de escalabilidade e contribuição
          para a transição energética.
        </Paragrafo>
      </Container>
      <Container>
        <Titulo>Mecanismos de Negociação</Titulo>
        <Paragrafo>
          A plataforma não só democratiza o acesso à energia renovável, mas
          também oferece uma série de benefícios socioeconômicos para as
          comunidades locais. Ao permitir que os moradores vendam sua própria
          energia, ela ajuda a reduzir os custos energéticos, especialmente em
          áreas remotas ou em regiões com infraestrutura energética deficiente.
          Além disso, a criação de empregos relacionados à instalação e
          manutenção de sistemas de geração de energia renovável, bem como o
          fortalecimento da economia local, são impactos diretamente associados
          à implementação dessa solução. A escalabilidade da plataforma, ao
          permitir que comunidades ao redor do mundo implementem microgrids
          interconectados, pode ter um efeito positivo em toda a rede elétrica,
          contribuindo para uma maior estabilidade energética e menos
          dependência das grandes corporações de energia.
        </Paragrafo>
        <Paragrafo>
        Esses tokens não apenas representam a energia gerada, mas também funcionam como uma forma de estimular a produção e o consumo de energia renovável. Os consumidores, por sua vez, podem utilizar os tokens para pagar pela energia adquirida ou acumulá-los para transações futuras. Esse modelo cria um mercado transparente e dinâmico, onde a oferta e a demanda de energia são reguladas de forma mais flexível e eficiente do que nos modelos tradicionais centralizados.
        </Paragrafo>
      </Container>
    </>
  );
};

export default Duvidas;
