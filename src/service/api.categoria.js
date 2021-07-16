import api from "../service/api";

const obterCategorias = async () => {
	try {
		const { data } = await api.get("categorias");
		return data;
	} catch (error) {
		console.log(error);
	}
};

const obterCategoriaPorNome = async (nome) => {
	try {
		const { data } = await api.get(`categorias/nome/${nome}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const obterCategoriaPorId = async (id) => {
	try {
		const { data } = await api.get(`categorias/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const cadastrarCategoria = async (novaCategoria) => {
	try {
		return await api.post("categorias", novaCategoria);
	} catch (error) {
		console.log(error);
	}
};

const atualizarCategiria = async (id, novaCategoria) => {
	try {
		const { data } = await api.put(`categorias/${id}`, novaCategoria);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const deletarCategoria = async (id) => {
	try {
		return await api.delete(`categorias/${id}`);
	} catch (error) {
		console.log(error);
	}
};

export default {
	obterCategorias,
	obterCategoriaPorNome,
	obterCategoriaPorId,
	cadastrarCategoria,
	atualizarCategiria,
	deletarCategoria,
};
