import { Text, View, StyleSheet } from "react-native";

interface PokemonDetail {
  types: { type: { name: string } }[];
}

const PokemonTypes = ({ types }: PokemonDetail) => {
  return (
    <View>
      {types.map((type, index) => {
        if (type.type.name === "grass") {
          return (
            <View key={index}>
              <Text>
                <Text>🍀</Text>
                {type.type.name}
              </Text>
            </View>
          );
        } else if (type.type.name === "water") {
          return (
            <View key={index}>
              <Text>
                <Text>💧</Text>
                {type.type.name}
              </Text>
            </View>
          );
        } else if (type.type.name === "fire") {
          return (
            <View key={index}>
              <Text>
                <Text>🔥</Text>
                {type.type.name}
              </Text>
            </View>
          );
        } else if (type.type.name === "poison") {
          return (
            <View key={index}>
              <Text>
                <Text>🧪</Text>
                {type.type.name}
              </Text>
            </View>
          );
        } else if (type.type.name === "flying") {
          return (
            <View key={index}>
              <Text>
                <Text>🚀</Text>
                {type.type.name}
              </Text>
            </View>
          );
        } else if (type.type.name === "bug") {
          return (
            <View key={index}>
              <Text>
                <Text>🐞</Text>
                {type.type.name}
              </Text>
            </View>
          );
        } else {
          return (
            <Text>
              <Text>👻</Text>
              {type.type.name}
            </Text>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     display: "flex",
  //     alignItems: "stretch",
  //     borderWidth: 2,
  //     borderColor: "white",
  //     justifyContent: "space-between",
  //     backgroundColor: "lightgray",
  //     width: "33%",
  //     paddingBottom: 12,
  //     paddingTop: 10,
  //   },
  //   pokemonType: {
  //     display: "flex",
  //     flexDirection: "row",
  //     fontWeight: "200",
  //     fontSize: 20,
  //     textAlign: "center",
  //     textTransform: "capitalize",
  //   },
});
export default PokemonTypes;
