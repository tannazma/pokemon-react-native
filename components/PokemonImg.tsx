import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

interface PokemonDetail {
  sprites: {
    front_default: string;
  };
}

const PokemonImage = ({ pokemon }: { pokemon: Pokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useState<null | PokemonDetail>(
    null
  );

  useEffect(() => {
    const getPokemonDetail = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      // console.log(data);
      // console.log(pokemon.url);
      // console.log(pokemonDetail.sprites.front_default);
      setPokemonDetail(data);
    };

    getPokemonDetail();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.pokemonBlock}>
        <Text style={styles.pokemonName}>
          {pokemon.name}
          {pokemonDetail && (
            <Image
              source={{ uri: pokemonDetail.sprites.front_default }}
              style={styles.pokemonImg}
            />
          )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "stretch",
    borderWidth: 2,
    borderColor: "white",
  },
  pokemonBlock: {
    justifyContent: "space-between",
  },
  pokemonImg: {
    width: 100,
    height: 100,
  },
  pokemonName: {
    backgroundColor: "green",
    fontWeight: "800",
    fontSize: 20,
    color: "white",
  },
});
export default PokemonImage;
