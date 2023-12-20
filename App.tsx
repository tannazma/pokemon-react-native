import { StatusBar } from "expo-status-bar";
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

export default function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemons(data.results);
    };
    getPokemons();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Pokemons list</Text>
      <ScrollView>
        {pokemons.map((pokemon) => (
          <PokemonImage key={pokemon.name} pokemon={pokemon} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    padding: 20,
    width: "80%",
    color: "black",
    borderColor: "black",
    borderWidth: 2,
  },
  title: {
    fontWeight: "800",
    fontSize: 30,
  },
  pokemonImg: {
    height: 100,
    width: 100,
  },
});
