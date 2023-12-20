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
        <Text>{pokemon.name}</Text>
        {pokemonDetail && (
          <Image
            source={{ uri: pokemonDetail.sprites.front_default }}
            style={styles.pokemonImg}
          />
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
  pokemonImg: {
    width: 100,
    height: 100,
  },
});
export default PokemonImage;
