import Card from "@/components/pokemonCard/Card";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExApp() {
  const charmanderData = {
    name: "Charmander",
    image: require("../../../assets/images/pokemon/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("../../../assets/images/pokemon/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };
  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../../../assets/images/pokemon/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Flying", "Ice", "Psychic"],
  };
  const pikachuData = {
    name: "Pikachu",
    image: require("../../../assets/images/pokemon/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card {...charmanderData} />
        <Card {...squirtleData} />
        <Card {...bulbasaurData} />
        <Card {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});
