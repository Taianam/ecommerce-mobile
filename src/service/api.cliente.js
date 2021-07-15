import api from '../service/api'

const obterCliente = async () => {
  try {
    const {data} = await api.get('clientes');
    return data;
  } catch (error) {
    console.log(error)
  }
}

const cadastrarCliente = async (cliente) => {
  try{
    return await api.post('clientes', cliente)
  } catch (error) {
    console.log(error)
  }
}

export {obterCliente, cadastrarCliente};