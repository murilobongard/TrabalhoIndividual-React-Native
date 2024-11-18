import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Carrinho = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Carrinho de compras</Text>
        <Text style={styles.endereco}>Rua Estandarte 108</Text>
      </View>
      <View style={styles.produtoCard}>
        <View style={styles.produtoHeader}>
          <Text style={styles.produtoTitle}>Produtos</Text>
          <FontAwesome name="bolt" size={16} color="#00C851" />
          <Text style={styles.textoRaio}>Full</Text>
        </View>

        <View style={styles.ProdutosDetalhes}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.produtoImagem}
          />
          <View style={styles.produtoInformacao}>
            <Text style={styles.productName}>
              Mochila Bolsa Escolar Feminina E Masculina
            </Text>
            <Text style={styles.productDesc}>Cor: Bege, Desenho: Liso</Text>

            <View style={styles.botao}>
              <Text style={styles.botaoTexto}>Excluir</Text>
              <Text style={styles.botaoTexto}>Salvar</Text>
              <Text style={styles.botaoTexto}>Alterar</Text>
            </View>
          </View>
          <Text style={styles.valor}>R$ 57,85</Text>
        </View>
        <View style={styles.frete}>
          <View style={styles.freteTextoContainer}>
            <Text style={styles.freteLabel}>Frete</Text>
            <View style={styles.valoresFrete}>
              <Text style={styles.PantigoFrete}>R$ 29,70</Text>
              <Text style={styles.valorFrete}>R$ 28,21</Text>
            </View>
          </View>

          <View style={styles.barra}>
            <View style={styles.barrAzul} />
          </View>

          <Text style={styles.fraseFrete}>
            Adicione mais R$ 21,15 para conseguir frete grátis em produtos Full.
          </Text>
        </View>
      </View>

      <View style={styles.containerFinal}>
        <View style={styles.pDescricao}>
          <Text style={styles.palavra}>Produto</Text>
          <Text style={styles.pValor}>R$ 57,85</Text>
        </View>
        <View style={styles.pDescricao}>
          <Text style={styles.palavra}>Frete</Text>
          <Text style={styles.pValor}>R$ 28,21</Text>
        </View>
        <TouchableOpacity style={styles.buttonCupon}>
          <Text style={styles.cupons}>Cupons</Text>
        </TouchableOpacity>
        <View style={styles.pDescricao}>
          <Text style={styles.palavra}>Total</Text>
          <Text style={styles.pValor}>R$ 86,06</Text>
        </View>
        <TouchableOpacity style={styles.ButtonComprar}>
          <Text style={styles.textoBotton}>Continuar a compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#ffea00",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    padding: 30,
    left: 5,
    top: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
  endereco: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 15,
  },
  produtoCard: {
    flex: 0.9,
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 10,
  },

  produtoHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  produtoTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 5,
  },
  textoRaio: {
    color: "#00C851",
    fontWeight: "600",
  },
  ProdutosDetalhes: {
    flexDirection: "row",
    alignItems: "center",
  },
  produtoImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginBottom: "10%",
    marginLeft: 15,
  },
  produtoInformacao: {
    flex: 1,
    marginBottom: "10%",
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
  },
  productDesc: {
    fontSize: 12,
    color: "#666",
  },
  botao: {
    flexDirection: "row",
    marginTop: 10,
  },
  botaoTexto: {
    color: "#007BFF",
    marginRight: 15,
  },
  valor: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: "40%",
  },
  frete: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginTop: 20,
    width: "100%",
  },
  freteTextoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  freteLabel: {
    fontSize: 14,
    flex: 1,
    flexShrink: 1,
  },
  valoresFrete: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
  PantigoFrete: {
    textDecorationLine: "line-through",
    color: "#999",
    marginRight: 10,
    flexShrink: 1,
  },
  valorFrete: {
    fontSize: 14,
    fontWeight: "bold",
    flexShrink: 1,
  },
  barra: {
    height: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  barrAzul: {
    width: "50%",
    height: "100%",
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  fraseFrete: {
    fontSize: 16,
    color: "#666",
  },
  containerFinal: {
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  pDescricao: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  palavra: {
    fontSize: 14,
  },
  pValor: {
    fontSize: 16,
    fontWeight: "600",
  },
  buttonCupon: {
    marginVertical: 10,
  },
  cupons: {
    color: "#007BFF",
  },
  ButtonComprar: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Carrinho;
