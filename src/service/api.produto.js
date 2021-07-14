import api  from "../service/api";

const obterProduto = async ()=>{
    try {
        await api.get("produtos");
    } catch (error) {
        console.log(error);
    }
  
}

const cadastrarProduto = async (categoriaId, novoProduto)=>{
try {
    await api.post(`produtos/${categoriaId}`, novoProduto)
} catch (error) {
    console.log(error)
}
    
}

const atualizarProduto =async (id, novoProduto)=>{
    try {
        await api.post(`produtos/${id}`, novoProduto)
    } catch (error) {
     console.log(error)   
    }

}

const deletarProduto =async (id)=>{
    try {
        await api.post(`produtos/${id}`)
    } catch (error) {
        console.log(error)
    }
  
}

export {obterProduto, cadastrarProduto, atualizarProduto,deletarProduto}