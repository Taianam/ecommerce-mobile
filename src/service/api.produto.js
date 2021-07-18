import api from "./api";


const obterProduto = async () => {
    try {
        const { data } = await api.get("produtos");
        console.log(data)

        return data;
    } catch (error) {
        console.log(error);
    }
};

const cadastrarProduto = async (categoriaId, novoProduto) => {
    try {
        return await api.post(`produtos/${categoriaId}`, novoProduto);
    } catch (error) {
        console.log(error);
    }
};

const atualizarProduto = async (id, novoProduto) => {
    try {
        const { data } = await api.put(`produtos/${id}`, novoProduto);
        return data;
    } catch (error) {
        console.log(error);
    }
};

const deletarProduto = async (id) => {
    try {
        return await api.delete(`produtos/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export { obterProduto, cadastrarProduto, atualizarProduto, deletarProduto };
