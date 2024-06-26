const API_URL = 'http://localhost:5173/';

async function buscarTodos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar contatos:', error);
    return [];
  }
}

async function buscarUm(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar contato por ID:', error);
    return null;
  }
}

async function adicionar(contato) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contato),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao adicionar contato:', error);
    return null;
  }
}

async function atualizar(contato) {
  try {
    const response = await fetch(`${API_URL}/${contato.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contato),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao atualizar contato:', error);
    return null;
  }
}

async function remover(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    return true;
  } catch (error) {
    console.error('Erro ao remover contato:', error);
    return false;
  }
}

export default {
  buscarTodos,
  buscarUm,
  adicionar,
  atualizar,
  remover,
};
