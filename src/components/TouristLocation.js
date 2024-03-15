import { View, Text } from "react-native";
import { styles } from "../styles/stylesheets";
export default function TouristComponent({ text, styles }) {
  return (
    <View>
      <Text style={styles}>{text}</Text>
    </View>
  );
}
