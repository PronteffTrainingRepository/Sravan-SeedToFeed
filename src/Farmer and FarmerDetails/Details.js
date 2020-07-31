import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export class Details extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              color: "white",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: height * 0.01,
              padding: height * 0.005,
            }}
          >
            <View
              style={{
                color: "white",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="menu" size={35} color="white" />
              <View style={{ paddingLeft: height * 0.01 }}>
                <Text
                  style={{
                    color: "rgb(237, 234, 234)",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Crop and Farmer Management
                </Text>
                <Text
                  style={{
                    color: "rgb(237, 234, 234)",
                    fontSize: 20,
                    letterSpacing: 1,
                    fontStyle: "italic",
                  }}
                >
                  Detail View
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="settings" size={30} color="white" />
              <MaterialIcons name="notifications" size={30} color="white" />
            </View>
          </View>
          <View style={styles.imgheadview}>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/tomato.jpg")}
              />
            </View>
            <View>
              <Text style={styles.imgtext}>Tomato(1.3Acrs)</Text>
              <Text style={styles.imgtext1}>Hybrid</Text>
              <MaterialIcons
                style={{ flexDirection: "column", justifyContent: "center" }}
                name="bookmark"
                size={30}
                color="red"
              />
              <Text style={styles.fertilizer}>Used Fertilizers</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={{ backgroundColor: "white" }}>
            <Text> Total Number of Days to Yield Crop</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.03,
    paddingLeft: height * 0.001,
    backgroundColor: "rgb(107, 188, 105)",

    //     alignItems: "center",
    //     justifyContent: "center",
  },
  image: {
    //     borderWidth: height * 0.01,

    height: height * 0.12,
    width: width * 0.3,
  },
  imgheadview: {
    paddingLeft: height * 0.006,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "white",
  },
  imgview: {
    alignItems: "center",
    borderWidth: height * 0.001,
    borderColor: "black",
    padding: height * 0.02,

    backgroundColor: "white",
  },
  imgtext: {
    marginTop: height * 0.01,
    paddingLeft: height * 0.01,
    fontWeight: "bold",
    fontSize: 25,
    color: "coral",
  },
  imgtext1: {
    paddingLeft: height * 0.01,
    fontWeight: "bold",
    fontSize: 20,
    color: "rgb(98, 219, 100)",
  },
  fertilizer: {
    flexDirection: "row",
    padding: height * 0.01,
    borderWidth: height * 0.002,
    borderColor: "black",
    margin: height * 0.01,
    borderRadius: height * 0.009,
    fontWeight: "bold",
    alignSelf: "center",
    paddingLeft: height * 0.06,
    paddingRight: height * 0.06,
  },
  line: {
    borderBottomWidth: height * 0.002,
    paddingTop: height * 0.006,
    paddingRight: height * 0.006,
    backgroundColor: "white",
  },
});
