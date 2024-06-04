import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Default import
import Novo from './pages/Novo'; // Default import
import { Erro404 } from './pages/Erro404'; // Default import
import Layout from './components/Layout'; // Default import
import Editar from './pages/Editar'; 
import Remover from './pages/Remover'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<Novo />} />
          <Route path="/editar/:id" element={<Editar />} /> 
          <Route path="/remover/:id" element={<Remover />} />           
        </Route>
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}
