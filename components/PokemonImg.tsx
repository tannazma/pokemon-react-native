import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

interface Pokemon {
  id: number;
  name: string;
  location_area_encounters: string;
  sprites: {
    front_default: string;
  };
}

const PokemonImg = () => {
  const [pokemonImg, setPokemonImg] = useState<null | Pokemon>(null);

  useEffect(() => {
    const getPokemonsWithImg = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      const data = await response.json();
      setPokemonImg(data.front_default);
    };

    getPokemonsWithImg();
  }, []);

  return (
    <View style={styles.container}>
      {pokemonImg && (
        <ScrollView>
          <Image
            source={{ uri: pokemonImg.sprites.front_default }}
            style={styles.pokemonImage}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
});
export default PokemonImg;
