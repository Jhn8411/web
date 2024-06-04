import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { ContatosContext } from '../contexts/ContatosContext';

function Home() {
  const { meusContatos, listarContatos } = useContext(ContatosContext);

  useEffect(() => {
    listarContatos();
  }, );

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ul>
        {meusContatos.map((contato) => (
          <li key={contato.id}>
            {contato.nome} - {contato.telefone}{' '}
            <Link to={`/editar/${contato.id}`}>Editar</Link> |{' '}
            <Link to={`/remover/${contato.id}`}>Remover</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
