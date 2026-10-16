import RNNestedApp from "./RNNavigation/RNNestedApp";

export default function HomeScreen() {
  return <RNNestedApp />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // height: 300,
//     // flexWrap: "wrap",
//     marginTop: 64,
//     borderWidth: 6,
//     flexGrow: 1,
//     // rowGap : 20,
//     // columnGap : 10,
//     // width: 200,
//     gap: 10,
//     borderColor: "red",
//     alignItems: "stretch",
//     // justifyContent : "space-evenly",
//     // flexDirection: "row",
//   },
// });

// import Greet from "@/components/greet";
// import { useState } from "react";
// import {
//   Button,
//   ImageBackground,
//   Modal,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import Styleshets from "./styleshets";

// const logImg = require("./../../assets/images/icon.png");

// export default function HomeScreen() {
//   const [isModalVisable, setIsModalVisable] = useState(false);
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {/* <Image source={logImg} style={{ width: 200, height: 200 }} /> */}
//         {/* <Image
//         source={{
//           uri: "https://reactnative.dev/img/tiny_logo.png",
//         }}
//         style={{ width: 200, height: 200 }}
//         onError={(e) => console.log("Gagal memuat gambar:", e.nativeEvent.error)}
//       /> */}

// <ActivityIndicator size="large" color="purple" animating/>

// <Button title="Alert" onPress={() => Alert.alert("Invalidate Data!", "Dob incoret", [{
//   text : "Cancel",
//   onPress: () => console.log("Cancel")
// }, {
//   text : "OK",
//   onPress: () => console.log("OK")
// }])}/>

// <Styleshets/>
// <Greet name="Rayhan"/>
// <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden/>
//         <Button
//           title="Pres"
//           onPress={() => setIsModalVisable(true)}
//           color={"midnightblue"}
//           // disabled
//         />

//         <ImageBackground
//           source={logImg}
//           style={{ flex: 1 }}
//           imageStyle={{ opacity: 0.5 }}
//         >
//           <Modal
//             visible={isModalVisable}
//             onRequestClose={() => setIsModalVisable(false)}
//             animationType="slide"
//             presentationStyle="pageSheet"
//             >
//             <Text>Modal Content</Text>
//             <Button
//               title="close"
//               color="midnightblue"
//               onPress={() => setIsModalVisable(false)}
//             />
//           </Modal>

//           <Pressable onPress={() => console.info("Text")}>
//             <Text style={{ color: "#e86603", fontSize: 22 }}>
//               Halaman Depan
//             </Text>
//             <Pressable
//               onPressIn={() => console.log("1. Jari mulai menempel")}
//               onPress={() =>
//                 console.log("2. Tombol berhasil ditekan (tap singkat)")
//               }
//               onLongPress={() => console.log("2. Tombol ditahan lama (>500ms)")}
//               onPressOut={() => console.log("3. Jari diangkat")}
//               // Memberikan efek visual otomatis saat ditekan
//               style={({ pressed }) => ({
//                 backgroundColor: pressed ? "darkblue" : "midnightblue",
//                 padding: 12,
//                 borderRadius: 8,
//               })}
//             >
//               <Text style={{ color: "white" }}>Tekan Saya</Text>
//             </Pressable>
//           </Pressable>
//           <Text>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
//             veritatis repudiandae voluptas assumenda commodi praesentium? Dolore
//             dolorem odit, illo, deserunt aspernatur tempore nesciunt nemo,
//             provident mollitia culpa dolorum. Incidunt, voluptatum. Lorem ipsum
//             dolor sit amet consectetur adipisicing elit. In illum saepe sunt
//             provident voluptatem at aspernatur incidunt, quaerat soluta corporis
//             ab consequatur laborum doloremque tempora rerum reprehenderit,
//             placeat repudiandae architecto! Lorem ipsum dolor sit amet
//             consectetur adipisicing elit. Alias eaque quam, fugit saepe fuga
//             nostrum magni ex eveniet molestiae omnis recusandae enim aperiam
//             officiis repudiandae, fugiat velit architecto id consequatur. Lorem
//             ipsum dolor sit amet consectetur adipisicing elit. Eum ab sapiente
//             nesciunt molestiae id officia aliquam cum consectetur mollitia enim
//             quia, reprehenderit quo optio eligendi totam officiis, debitis vel?
//             Ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
//             voluptatibus, id sint aspernatur inventore, velit explicabo illum
//             rerum maiores voluptas cum corporis dolores temporibus odio magnam
//             sequi nemo placeat illo. Lorem ipsum dolor, sit amet consectetur
//             adipisicing elit. Ullam veritatis repudiandae voluptas assumenda
//             commodi praesentium? Dolore dolorem odit, illo, deserunt aspernatur
//             tempore nesciunt nemo, provident mollitia culpa dolorum. Incidunt,
//             voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             In illum saepe sunt provident voluptatem at aspernatur incidunt,
//             quaerat soluta corporis ab consequatur laborum doloremque tempora
//             rerum reprehenderit, placeat repudiandae architecto! Lorem ipsum
//             dolor sit amet consectetur adipisicing elit. Alias eaque quam, fugit
//             saepe fuga nostrum magni ex eveniet molestiae omnis recusandae enim
//             aperiam officiis repudiandae, fugiat velit architecto id
//             consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Eum ab sapiente nesciunt molestiae id officia aliquam cum
//             consectetur mollitia enim quia, reprehenderit quo optio eligendi
//             totam officiis, debitis vel? Ad. Lorem ipsum dolor sit amet
//             consectetur adipisicing elit. Dolor voluptatibus, id sint aspernatur
//             inventore, velit explicabo illum rerum maiores voluptas cum corporis
//             dolores temporibus odio magnam sequi nemo placeat illo.
//           </Text>
//         </ImageBackground>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#666666",
//     textAlign: "center",
//   },
//   boxShadow : {
//     shadowColor : "#3333333",
//     shadowOffset : {
//       width : 6,
//       height : 6,
//     },
//     shadowOpacity : .6,
//     shadowRadius : 6,

//   }
// });
