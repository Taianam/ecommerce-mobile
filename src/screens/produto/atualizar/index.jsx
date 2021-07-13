// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
// } from "react-native";
// import api from "../../../service/api";

// export function Atualizar() {
// 	"nome": "Maças da Afrodite",
// 	"descricao": "Os docinhos tradicionais já chamam a atenção de muitas pessoas, afinal de conta, quase ninguém rejeita o tradicional brigadeiro ou beijinho feitos com leite condensado e chocolate em pó, por exemplo.",
// 	"preco": 10.98,
// 	"estoque":10000,
// 	"imagem": "https://cdn.guiadacozinha.com.br/wp-content/uploads/2019/10/ma%C3%A7%C3%A3-amor-tradicional-chocolate.jpg",
// 	"dataDeCadastro": "2021-06-14"
//     const [ ]
//   useEffect(() => {
//     obterProduto();
//   }, []);

//   //Função para chamar os produtos na api
//   const obterProduto = async () => {
//     try {
//       const { data } = await api.get("produtos");
//       setProdutos(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <View>
//       <TextInput
//         value={email}
//         onChangeText={setEmail}
//         style={style.input}
//         placeholder="E-mail"
//       />
//       <TextInput
//         onChangeText={setSenha}
//         value={senha}
//         style={style.input}
//         placeholder="Senha"
//         secureTextEntry={true}
//       />
//     </View>
//   );
// }
