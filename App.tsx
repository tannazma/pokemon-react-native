import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import PokemonImage from "./components/PokemonImg";

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
    <View style={styles.container}>
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
    width: "100%",
    marginTop: 20,
  },
  title: {
    fontWeight: "800",
    fontSize: 30,
    marginTop: 40
  },
});
