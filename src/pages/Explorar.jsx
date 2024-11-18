import styled from "styled-components";
import FaixaVerde from "../components/FaixaVerde";
import { useFetch } from "../hooks/useFetch";

const Container = styled.div`
  padding-top: 50px;
`;

const Feed = styled.div`
  background-color: white;
  margin: auto;
  width: 700px;
  border-radius: 25px;
  padding: 25px;
  text-align: center;
  margin-top: 40px;

  h1 {
    letter-spacing: 0.8px;
    font-size: 1.9rem;
    font-weight: 800;
    font-family: poppins;
  }

  p {
    font-size: 1.2rem;
    font-weight: 900;
    padding: 10px;
    font-family: "Doto";
  }
`;

const TextoAmarelo = styled.span`
  color: #ffc107;
`;

const ResgateApi = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const UsuarioCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  text-align: left;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #555;
  }

  span {
    font-weight: bold;
    color: #ffc107;
  }
`;

const Explorar = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/usuarios");

  return (
    <>
      <Container>
        <FaixaVerde
          titulo="Explorar"
          paragrafo="Nesta seção, você pode conhecer as pessoas que estão utilizando a blockchain e acessar suas informações para aumentar sua visibilidade. Isso cria oportunidades para interações de compra e venda, potencializando conexões e negócios."
        />
      </Container>
      <Feed>
        <h1>
          Com os <TextoAmarelo>Tokens de Energia</TextoAmarelo> é possível
        </h1>
        <p>VENDER PARA ALGUÉM PELA BLOCKCHAIN</p>
        <p>ARMAZENAR PARA O FUTURO</p>
        <p>COMPRAR DE ALGUÉM PELA BLOCKCHAIN</p>
      </Feed>
      <Feed>
        <h1>Veja as pessoas que já estão utilizando e conectem-se</h1>
      </Feed>
      <ResgateApi>
        {loading && <p>Carregando usuários...</p>}
        {error && <p>Erro ao carregar usuários: {error}</p>}
        {data &&
          data.map((usuario) => (
            <UsuarioCard key={usuario.id}>
              <h2>{usuario.nome}</h2>
              <p>
                Profissão: <span>{usuario.profissao}</span>
              </p>
              <p>
                Idade: <span>{usuario.idade}</span>
              </p>
              <p>
                Tokens ativos: <span>{usuario.tokensAtivos}</span>
              </p>
            </UsuarioCard>
          ))}
      </ResgateApi>
    </>
  );
};

export default Explorar;
