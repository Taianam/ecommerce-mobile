import api from '../service/api'

const obterCliente = async () => {
  try {
    return {data} = await api.get('clientes');
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