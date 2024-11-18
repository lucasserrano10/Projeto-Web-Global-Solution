import styled from "styled-components";
import FaixaVerde from "../components/FaixaVerde";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Container = styled.div`
  padding-top: 50px;
`;

const Formulario = styled.div`
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

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }

    button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-size: 1.1rem;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }
  }
`;

const TextoAmarelo = styled.span`
  color: #ffc107;
`;

const Cadastrar = () => {
  const [formData, setFormData] = useState({
    nome: "",
    profissao: "",
    idade: "",
    tokensAtivos: "",
  });

  const { httpConfig, loading, error } = useFetch("http://localhost:3000/usuarios");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    httpConfig(formData, "POST"); 
    alert("Cadastro realizado com sucesso!");
    setFormData({ nome: "", profissao: "", idade: "", tokensAtivos: "" }); 
  };

  return (
    <>
      <Container>
        <FaixaVerde
          titulo="Cadastrar-se"
          paragrafo="Você pode cadastrar-se para conectar-se com outras pessoas, e ampliar sua rede de networking para vender seus tokens de energia, comprar ou até mesmo conversar com outras pessoas que usam da blockchain"
        />
      </Container>
      <Formulario>
        <h1>Faça o Cadastro</h1>
        <p>
          Assim seus dados ficam na nossa seção explorar, e você consegue expandir seu network caso queira comprar ou
          vender <TextoAmarelo>tokens de energia</TextoAmarelo>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="profissao"
            placeholder="Profissão"
            value={formData.profissao}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="idade"
            placeholder="Idade"
            value={formData.idade}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="tokensAtivos"
            placeholder="Tokens ativos"
            value={formData.tokensAtivos}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Cadastrar"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>Erro ao cadastrar: {error}</p>}
      </Formulario>
    </>
  );
};

export default Cadastrar;
