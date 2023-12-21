import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Pokemon } from "../types";
import PokemonTypes from "./PokemonTypes";

interface PokemonDetail {
  id: number;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: any;
          };
        };
      };
    };
  };
  types: { type: { name: string } }[];
}

const PokemonImage = ({
  pokemon,
  navigation,
}: {
  pokemon: Pokemon;
  navigation: any;
}) => {
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

  if (!pokemonDetail) {
    return null;
  }

  const pokemonGif =
    pokemonDetail.sprites.versions["generation-v"]["black-white"].animated
      .front_default;
  return (
    <View
      style={styles.container}
      onTouchEnd={() =>
        navigation.navigate("Pokemon", { id: pokemonDetail.id })
      }
    >
      <Text style={styles.pokemonName}>
        {pokemon.name}
      </Text>
      <View style={styles.pokemonGifContainer}>
        <Image
          width={50}
          height={50}
          source={{
            uri: pokemonGif,
          }}
          style={styles.pokemonImg}
        />
      </View>
      {pokemonDetail && <PokemonTypes types={pokemonDetail.types} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "stretch",
    padding: 15,
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
    width: 50,
    height: 50,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  pokemonGifContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
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
