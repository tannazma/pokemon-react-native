import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Pokemon } from "../types";
import PokemonTypes from "./PokemonTypes";

interface PokemonDetail {
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
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
      <Text style={styles.pokemonName}>{pokemon.name}</Text>
      {pokemonDetail && (
        <Image
          source={{ uri: pokemonDetail.sprites.front_default }}
          style={styles.pokemonImg}
        />
      )}
      {pokemonDetail && <PokemonTypes types={pokemonDetail.types} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "stretch",
    padding:15,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "space-between",
    backgroundColor: "thistle",
    borderRadius: 15,
    width: "33%",
    paddingBottom: 12,
    paddingTop: 10,
  },
  pokemonImg: {
    width: 100,
    height: 100,
  },
  pokemonType: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "200",
    fontSize: 20,
    textAlign: "center",
    textTransform: "capitalize",
  },
  pokemonName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    color: "white",
    textTransform: "capitalize",
  },
});
export default PokemonImage;
