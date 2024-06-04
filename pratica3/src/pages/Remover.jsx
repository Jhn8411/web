// Remover.jsx

import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContatosContext } from '../contexts/ContatosContext';

function Remover() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { consultarContato, excluirContato } = useContext(ContatosContext);

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    const fetchContato = async () => {
      try {
        const contato = await consultarContato(id);
        setNome(contato.nome);
        setTelefone(contato.telefone);
      } catch (error) {
        console.error('Erro ao consultar contato:', error);
      }
    };

    fetchContato();
  }, [id, consultarContato]);

  const handleSubmit = async () => {
    try {
      await excluirContato(id);
      navigate('/'); // Navigate back to the home page
    } catch (error) {
      console.error('Erro ao remover contato:', error);
    }
  };

  return (
    <div>
      <h2>Remover Contato</h2>
      <label>Nome:</label>
      <span>{nome}</span>

      <label>Telefone:</label>
      <span>{telefone}</span>

      <button onClick={handleSubmit}>Remover</button>
    </div>
  );
}

export default Remover;
