import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Pokemon } from "../types";

const PokemonDetailPage = ({ route }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { id } = route.params;

  useEffect(() => {
    const getPokemon = async () => {
      if (id === undefined) {
        return;
      }
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };
    getPokemon();
  }, [id]);
  return (
    <View>
      <Text>Pokemon Detail page</Text>
      <Text>{ pokemon && pokemon.name}</Text>
    </View>
  );
};
export default PokemonDetailPage;
