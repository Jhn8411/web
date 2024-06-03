import { useContext } from 'react';
import ContatosContext from '../contexts/ContatosContext';

function Home() {
    const { meusContatos } = useContext(ContatosContext);

    return (
        <ul>
            {meusContatos.map((contato, key) => <li key={key}>{contato.nome} - {contato.telefone}</li>)}
        </ul>
    );
}

export default Home;
