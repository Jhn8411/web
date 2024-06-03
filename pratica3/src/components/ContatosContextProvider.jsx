import { useState } from 'react';
import ContatosContext from '../contexts/ContatosContext';
import PropTypes from 'prop-types';

export function ContatosContextProvider({ children }) {
    const [contatos, setContatos] = useState([]);

    const incluirContato = (contato) => {
        setContatos((contatosAnteriores) => [...contatosAnteriores, contato]);
    };

    return (
        <ContatosContext.Provider value={{ meusContatos: contatos, incluirContato }}>
            {children}
        </ContatosContext.Provider>
    );
}

ContatosContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
