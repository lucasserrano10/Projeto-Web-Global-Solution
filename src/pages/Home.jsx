import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

const StyledImage = styled.img`
    width: 100vw;
    height: auto;
`;


const BoxDentroImagem = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(192, 192, 192, 0.4);
    padding: 20px;
    border: 1px solid black;
    border-radius: 20px;
    font-size: 1.3rem;
    font-weight:900;
    font-family: "Doto", sans-serif;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 15px;
    }
`;


const TextoVerde = styled.span`
    color: #34A853;
`;

const TextoAmarelo = styled.span`
    color: #FFC107;
`;

const Faixa = styled.div`
    background-color: #34A853;
    padding:15px;
    text-align:center;
    margin-top:-4px;
    color: white;
    font-family:poppins;
    font-size:1.4rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    letter-spacing: 0.8px;

    h1{
        text-shadow: 1px 1px 2px black;
    }

    p{
        text-shadow: 0px 1px 2px black;
        font-family:"Doto";
        font-weight:700;
    }
`;

const CardsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px 20px;
    gap: 70px;
`;


const Card = styled.div`
    background: white;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        font-weight:900;
        font-family:poppins;
        color: #333;
    }

    .highlight {
        background-color: #FFC107;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        margin-bottom: 20px;
    }

    button {
        background-color: #34A853;
        color: black;
        font-weight:900;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #ccc;
        }
    }
`;

const FooterContainer = styled.footer`
    background-color: #000;
    color: #fff;
    padding: 40px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
`;

const Info = styled.div`
    font-size: 0.9rem;
    line-height: 1.6;

    p {
        margin: 0;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 15px;

    a {
        color: #fff;
        font-size: 1.2rem;
        transition: color 0.3s;

        &:hover {
            color: #FFC107;
        }
    }
`;



const Home = () => {
    return (
        <>
            <Container>
                <ImageContainer>
                    <StyledImage
                        src="../../public/home-site-global.webp"
                        alt="image-home"
                    />
                    <BoxDentroImagem>
                        <p>
                            <TextoVerde>Energia Renovável</TextoVerde> e conectada:
                            impulsionando a autonomia através da tecnologia{" "}
                            <TextoAmarelo>Blockchain</TextoAmarelo>.
                        </p>
                    </BoxDentroImagem>
                </ImageContainer>
            </Container>
            <Faixa>
                <h1>NOSSA MISSÃO</h1>
                <p>Conheça mais o nosso propósito</p>
            </Faixa>
            <CardsSection>
                <Card>
                    <h2>OPORTUNIDADE</h2>
                    <div className="highlight">Oportunidade: uma plataforma descentralizada de energia renovável que fortalece comunidades com blockchain, eficiência e transparência."
                    4o</div>
                    <Link to="/saiba-mais/1">
                        <button>Saiba mais</button>
                    </Link>
                </Card>
                <Card>
                    <h2>A BLOCKCHAIN</h2>
                    <div className="highlight">Uma plataforma de energia sustentável em blockchain, onde produtores locais vendem energia renovável diretamente para consumidores, criando um mercado transparente e dinâmico.</div>
                    <Link to="/saiba-mais/2">
                        <button>Saiba mais</button>
                    </Link>
                </Card>
                <Card>
                    <h2>IMPACTOS</h2>
                    <div className="highlight">A plataforma democratiza o acesso à energia renovável, reduz custos, gera empregos e fortalece economias locais. Com microgrids interconectados, ela promove estabilidade e menor dependência das grandes corporações.</div>
                    <Link to="/saiba-mais/3">
                        <button>Saiba mais</button>
                    </Link>
                </Card>
            </CardsSection>
            <FooterContainer>
            <Logo>Electric Chain</Logo>
            <Info>
                <p>&copy; 2024 Electric Chain. Todos os direitos reservados.</p>
                <p>Transformando energia descentralizada em autonomia global.</p>
            </Info>
            <SocialIcons>
                <a href="https://www.facebook.com" target='blank' aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://x.com" target='blank' aria-label="Twitter"><FaTwitter /></a>
                <a href="https://www.instagram.com" target='blank' aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/lucas-serrano-8168b6206/" aria-label="LinkedIn" target='blank'><FaLinkedinIn /></a>
            </SocialIcons>
        </FooterContainer>
        </>
    );
};

export default Home;

