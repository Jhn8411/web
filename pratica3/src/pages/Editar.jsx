// Editar.jsx

import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import the necessary hooks
import { ContatosContext } from '../contexts/ContatosContext';

function Editar() {
  const { id } = useParams(); // Get the ID parameter from the URL
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { consultarContato, alterarContato } = useContext(ContatosContext);

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');

  useEffect(() => {
    // Fetch the contact details based on the ID
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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!nome) {
      setErroNome('O nome é obrigatório.');
      return;
    }
    if (!telefone) {
      setErroTelefone('O telefone é obrigatório.');
      return;
    }

    // Update the contact
    try {
      await alterarContato({ id, nome, telefone });
      navigate('/'); // Navigate back to the home page
    } catch (error) {
      console.error('Erro ao atualizar contato:', error);
    }
  };

  return (
    <div>
      <h2>Editar Contato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        {erroNome && <p className="erro">{erroNome}</p>}

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        {erroTelefone && <p className="erro">{erroTelefone}</p>}

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Editar;
