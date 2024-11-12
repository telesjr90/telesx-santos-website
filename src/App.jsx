import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biografia from './pages/Biografia';
import Contato from './pages/Contato';
import GeneroPage from './pages/GeneroPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/generos/:genero" element={<GeneroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
