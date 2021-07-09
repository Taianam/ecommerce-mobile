import React,{createContext, useContext, useState} from 'react'

const CarrinhoContexto = createContext({});

function ControleCarrinho({children}){

    const [produtosIds, setProdutosIds] = useState([]);

    function adicionarProdutoPorId(id){
        setProdutosIds( produtoids => [...produtoids, id])
    }

    function removerProdutoPorId(id){
        const idFiltrado = produtosIds.find((idProduto, index)=>{
            if(idProduto === id){
                return index;
            }
        })
        
        if(idFiltrado !== undefined){
            produtosIds.splice(idFiltrado)
            setProdutosIds(produtosIds)
        }
    }

    return(
        <CarrinhoContexto.Provider value={{
            adicionarProdutoPorId, removerProdutoPorId, produtosIds}}
        >
            {children}
        </CarrinhoContexto.Provider>
    )
}

function usarControleCarrinho() {
    const contexto = useContext(CarrinhoContexto);
  
    if (!contexto) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return contexto;
  }
 
  export {ControleCarrinho, usarControleCarrinho}