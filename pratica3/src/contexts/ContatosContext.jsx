import React, { createContext, useState } from 'react';

const ContatosContext = createContext({
    meusContatos: [],
    incluirContato: () => {},
});

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

export default ContatosContext;
