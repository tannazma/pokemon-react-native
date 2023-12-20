import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import PokemonImg from "./components/PokemonImg";

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
          <View style={styles.container}>
            <Text key={pokemon.id}>{pokemon.name}</Text>
          </View>
        ))}
        <PokemonImg />
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
});
