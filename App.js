import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import foto from "./assets/foto.jpg";
import Card from "./src/components/Card";

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case "linkedin":
        Alert.alert("Meu linkedin", "https://linkedin.com/in/alexia-raphaela");
        break;
      case "github":
        Alert.alert("Meu github", "https://github.com/alexia-raphaela");
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabeçalho}>
          <Image style={style.perfil} source={foto}></Image>
          <Text style={style.nome}>Aléxia Raphaela</Text>
          <Text style={style.funcao}>Estagiária</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial("github")}>
              <Icon name="github" size={25} />
            </TouchableOpacity>
            <TouchableOpacity disabled>
              <Icon name="facebook" size={25} color="#1778F2" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial("linkedin")}>
              <Icon name="linkedin" size={25} color="#0961B8" />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Experiência Profissional">
          <Text style={style.card_content_text}>
            Operadora de caixa há 4 anos
          </Text>
        </Card>
        <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>Cursando ensino superior</Text>
          <Text style={style.card_content_text}>Curso de inglês</Text>
          <Text style={style.card_content_text}>
            Cursos de javaScript da udemy
          </Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: "#E7E7E7",
    flex: 1,
  },
  perfil: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  container_cabeçalho: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  funcao: {
    color: "#636363",
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 20,
  },
  card_content_text: {
    color: "#939393",
    marginBottom: 10,
  },
});

export default App;
