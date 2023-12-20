import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import PokemonImage from "../components/PokemonImg";
import { Pokemon } from "../types";

const HomeScreen = ({ navigation }) => {
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
    <View style={styles.Ardi}>
      <Button
        title="Pokemon detail page"
        onPress={() => navigation.navigate("Pokemon", { name: "Pokemon name" })}
      />
      <Text style={styles.title}>Pokemons list</Text>
      <ScrollView>
        <View style={styles.container}>
          {pokemons.map((pokemon, index) => (
            <PokemonImage key={index} pokemon={pokemon} />
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  Ardi: {
    paddingBottom: 120,
  },
  container: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  title: {
    fontWeight: "800",
    fontSize: 30,
    marginTop: 40,
  },
});

export default HomeScreen;
