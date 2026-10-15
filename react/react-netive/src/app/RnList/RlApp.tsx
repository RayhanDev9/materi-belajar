import { SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pokemonGrouped from "./../../../grouped-data.json";

export default function RlApp() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemon.map((pokemon) => {
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* <FlatList
        data={pokemon}
        renderItem={(item) => (
          <View style={styles.card} key={item?.item?.id}>
            <Text style={styles.cardText}>{item?.item?.type}</Text>
            <Text style={styles.cardText}>{item?.item?.name}</Text>
          </View>
        )}
        // horizontal={true}
        ItemSeparatorComponent={<View style={{ height: 16 }} />}
        ListEmptyComponent={<Text>No Items Found</Text>}
        ListHeaderComponent={
          <Text style={styles.headerText}>Pokemon List</Text>
        }
        ListFooterComponent={<Text style={styles.footerText}>List Of End</Text>}
      /> */}

      <SectionList
        sections={pokemonGrouped}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }: { section: { type: string } }) => {
          return (
            <View>
              <Text style={styles.sectionHeaderText}>{section.type}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    // backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
    // color: "white",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#00cc00",
  },
});
