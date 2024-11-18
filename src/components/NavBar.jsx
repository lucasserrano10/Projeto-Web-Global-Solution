import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; /* Adiciona um padding para dar espaçamento nas laterais */
`;

const NavSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
    gap: 10px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 26px;
    font-weight: bold;

    img {
    height: 80px; /* Altura padrão do logo */
    max-height: 100px;
    margin-right: 10px;
    }

    @media (max-width: 1024px) {
    font-size: 22px;
    img {
        height: 70px;
    }
    }

    @media (max-width: 768px) {
    font-size: 18px;
    img {
        height: 60px;
    }
    }

    @media (max-width: 480px) {
    font-size: 16px;
    img {
        height: 50px;
    }
    }
`;

const NavLink = styled(Link)`
    font-family: poppins;
    text-decoration: none;
    color: black;
    font-weight: bold;
    text-shadow: 2px 2px solid black;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
    transform: scale(1.05); 
    }

    @media (max-width: 768px) {
    font-size: 14px;
    }
`;


const ButtonLink = styled(Link)`
    padding: 8px 16px;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

    &:first-of-type {
    background-color: #34A853;
    }

    &:last-of-type {
    background-color: #FFC107;
    }

    @media (max-width: 1024px) {
    padding: 6px 12px;
    font-size: 14px;
    }

    @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
    }
`;

const NavBar = () => {
    return (
    <Nav>
        <NavContainer>
            <NavSection>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/desafio">DESAFIO</NavLink>
                <NavLink to="/duvidas">DÚVIDAS</NavLink>
            </NavSection>
        <Logo>
            <img src="../../public/eletricChain.png" alt="Logo" />
        </Logo>
            <NavSection>
                <ButtonLink to="/explorar">Explorar</ButtonLink>
                <ButtonLink to="/cadastrar">Cadastrar</ButtonLink>
            </NavSection>
        </NavContainer>
    </Nav>
    );
};

export default NavBar;
