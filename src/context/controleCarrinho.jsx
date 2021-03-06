import React, { createContext, useContext, useState } from "react";

const CarrinhoContexto = createContext({});

function ControleCarrinho({ children }) {
  const [produtosIds, setProdutosIds] = useState([]);

  // Função que vai acumulando os ids do produto.
  function adicionarProdutoPorId(id) {
    setProdutosIds((produtoids) => [...produtoids, id]);
  }

  // Função que remove um unico id do estado
  async function removerProdutoPorId(id) {
    
    produtosIds.splice(produtosIds.indexOf(id), 1);
    setProdutosIds(()=> produtosIds);
    return produtosIds;
  }

  return (
    <CarrinhoContexto.Provider
      value={{ adicionarProdutoPorId, removerProdutoPorId, produtosIds }}
    >
      {children}
    </CarrinhoContexto.Provider>
  );
}

function usarControleCarrinho() {
  const contexto = useContext(CarrinhoContexto);

  if (!contexto) {
    throw new Error("Erro ao usar o ProvedorDeAutentifição");
  }

  return contexto;
}

export { ControleCarrinho, usarControleCarrinho };
