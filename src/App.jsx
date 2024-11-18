// configurando rotas
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importando páginas
import Home from './pages/Home';
import Desafio from './pages/Desafio';
import Duvidas from './pages/Duvidas';
import Explorar from './pages/Explorar';
import Cadastrar from './pages/Cadastrar';

// Importando componentes
import NavBar from './components/NavBar';
import CardDetails from './components/CardDetails';

// dados
import cardsData from '../data/CardsData';


function App() {
  return (

    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saiba-mais/:id" element={<CardDetails />} />
        <Route path="/desafio" element={<Desafio />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

