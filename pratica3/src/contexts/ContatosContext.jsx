import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { buscarTodos, buscarUm, atualizar, remover, adicionar } from '../../services/ContatosService';

const ContatosContext = createContext();

export function ContatosContextProvider({ children }) {
  const [contatos, setContatos] = useState([]);

  const listar = async () => {
    try {
      const resultado = await buscarTodos();
      setContatos(resultado);
    } catch (error) {
      console.error('Erro ao buscar contatos:', error);
    }
  };

  const consultar = async (id) => {
    try {
      const resultado = await buscarUm(id);
      return resultado;
    } catch (error) {
      console.error('Erro ao consultar contato por ID:', error);
      return null;
    }
  };

  const alterar = async (contato) => {
    try {
      await atualizar(contato);
    } catch (error) {
      console.error('Erro ao atualizar contato:', error);
    }
  };

  const excluir = async (id) => {
    try {
      await remover(id);
    } catch (error) {
      console.error('Erro ao remover contato:', error);
    }
  };

  const incluir = async (novoContato) => {
    try {
      await adicionar(novoContato);
    } catch (error) {
      console.error('Erro ao adicionar contato:', error);
    }
  };

  const contexto = {
    meusContatos: contatos,
    incluirContato: incluir,
    listarContatos: listar,
    consultarContato: consultar,
    alterarContato: alterar,
    excluirContato: excluir,
  };

  return (
    <ContatosContext.Provider value={contexto}>
      {children}
    </ContatosContext.Provider>
  );
}

ContatosContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContatosContext;
