import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TouristComponent from "./src/components/TouristLocation";
import { styles } from "./src/styles/stylesheets";
import Img from "./src/components/ImgComponent";
export default function App() {
  return (
    <View style={styles.container}>
      <TouristComponent styles={styles.tourist} text="Petar" />
      <TouristComponent
        styles={styles.adress}
        text="Endereço: Rodovia SP-165, Km 156 s/n Zona Rural, Iporanga - SP, 18330-000"
      />
      <TouristComponent
        styles={styles.desc}
        text="Criado em 1958, com seus mais 35.750 ha, localiza-se no sul do estado de São Paulo, abrange parte dos municípios de Iporanga e Apiaí e tem continuidade territorial com o PE Intervales. Além do valor como área remanescente de floresta, a importância é acentuada pela associação da floresta com o chamado “relevo de exceção”, com sistemas de cavernas que abrigam paisagens subterrâneas únicas, com grande variedade morfológica de espeleotemas e sítios paleontológicos. Pelo número – mais de 400, beleza e complexidade das suas cavernas, o PETAR é um Parque internacionalmente reconhecido."
      />

      <Img img={require("./src/assets/images/petar.jpeg")} />
    </View>
  );
}
