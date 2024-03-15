import { View, Text, Image } from "react-native";
import { styles } from "../styles/stylesheets";
const img = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCrLX7GmZJjZ6TWxWCOtjjFFfFj0yIbJV6A&usqp=CAU",
};

export default function Img() {
  return <Image style={styles.img} source={img} />;
}
