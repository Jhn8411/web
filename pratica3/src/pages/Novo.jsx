import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContatosContext } from '../contexts/ContatosContext';

function Novo() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroTelefone, setErroTelefone] = useState('');
    const { incluirContato } = useContext(ContatosContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nome) {
            setErroNome('Nome é obrigatório');
        }
        if (!telefone) {
            setErroTelefone('Telefone é obrigatório');
        }
        if (nome && telefone) {
            incluirContato({ nome, telefone });
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            {erroNome && <p className="erro">{erroNome}</p>}
            <label>
                Telefone:
                <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            </label>
            {erroTelefone && <p className="erro">{erroTelefone}</p>}
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Novo;
