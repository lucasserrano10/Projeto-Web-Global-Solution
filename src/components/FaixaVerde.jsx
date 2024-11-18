import styled from "styled-components";

const Faixa = styled.div`

    background-color: #34A853; /* Cor verde */
    padding: 15px;
    text-align: center;
    color: white;
    width: 100vw; /* Garante que o componente ocupe toda a largura da tela */
    height: auto; /* Ajuste automático para a altura */
    box-sizing: border-box;
    margin: 0;
    padding-top: 60px; /* Para não ser coberto pelo nav */
    font-size: 16px;
    letter-spacing: 0.5px; /* Espaçamento entre as letras */
    word-wrap: break-word; /* Quebra de linha para textos longos */
`;

const Titulo = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    font-family:poppins;
    text-transform: uppercase; /* Título em letras maiúsculas */
    padding-bottom: 10px; /* Espaçamento entre o título e o parágrafo */
`;

const Paragrafo = styled.p`
    font-size: 12px; /* Tamanho reduzido da fonte */
    font-weight: normal;
    margin-top: 10px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6; 
    text-align: center; 
    word-wrap: break-word; 
    max-width: 800px;
    margin-left: auto;
    margin-right: auto; 
`;

const FaixaVerde = ({ titulo, paragrafo }) => {
    return (
        <Faixa>
            <Titulo>{titulo}</Titulo>
            {paragrafo && <Paragrafo>{paragrafo}</Paragrafo>}
        </Faixa>
    );
};

export default FaixaVerde;
