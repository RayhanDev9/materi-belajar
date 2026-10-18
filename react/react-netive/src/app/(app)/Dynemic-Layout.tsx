// import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    useWindowDimensions
} from "react-native";

export default function DynemicLayout() {
  //   const [dimensions, setDimensions] = useState({
  //     window: Dimensions.get("window"),
  //   });

  //   useEffect(() => {
  //     const subcreption = Dimensions.addEventListener("change", ({ window }) => {
  //       setDimensions({ window });
  //     });

  //     return () => subcreption?.remove();
  //   }, []);

  //   const { window } = dimensions;
  //   const windowWidth = window.width;
  //   const windowHeight = window.height;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={[styles.text, { fontSize: windowWidth > 500 ? 50 : 40 }]}>
          Tes
        </Text>
      </View>
    </View>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    // fontSize: windowWidth > 500 ? 50 : 40,
  },
});
