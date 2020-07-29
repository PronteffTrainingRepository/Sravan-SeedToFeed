import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Form, TextValidator } from "react-native-validator-form";
import image from "../assests/Images/logo.png";
import { FontAwesome } from "@expo/vector-icons";
import { minNumber } from "react-native-validator-form/lib/ValidationRules";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert(
      "Credentials",
      `username:${username}
    password: ${password}`
    );
    this.state.username = this.setState({ username: "" });
    this.state.password = this.setState({ password: "" });
  }

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       mobileNumber: "",
  //       numberError: "",
  //       password: "",
  //       passwordError: "",
  //       validated: "",
  //     };

  //     this.handleChange = this.handleChange.bind(this);

  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  //   handleChange(event) {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //     if (event.target.name === "mobileNumber") {
  //       this.setState({ numberError: "" });
  //     }
  //     if (event.target.name === "password") {
  //       this.setState({ passwordError: "" });
  //     }
  //   }

  //   validate = () => {
  //     let numberError = "";
  //     let passwordError = "";

  //     if (!this.state.mobileNumber) {
  //       numberError = "mobileNumber  is required!";
  //     }

  //     if (!this.state.password) {
  //       passwordError = "Password is required!";
  //     }

  //     if (numberError || passwordError) {
  //       this.setState({ numberError, passwordError });

  //       return false;
  //     }

  //     return true;
  //   };

  //   handleSubmit = (event) => {
  //     const isValid = this.validate();
  //     if (isValid) {
  //       // return <Redirect to="/dashboard/" />;
  //       Alert.alert(
  //         "Credentials",
  //         `username:${username}
  //     password: ${password}`
  //       );
  //     } else {
  //       console.log(this.event);
  //     }
  //     event.preventDefault();
  //   };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Form>
          <View>
            <View style={styles.buble2}></View>
            <View style={styles.buble}></View>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: Dimensions.get("window").height * 0.05,
            }}
          >
            <Image source={image} style={styles.image} />
          </View>

          <View style={styles.header}>
            <Text style={{ fontSize: 20, marginBottom: height * 0.015 }}>
              Login Form{" "}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 15, padding: 10 }}>Mobile Number </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
            }}
          >
            <FontAwesome name="user-o" size={24} color="black" />
            <TextValidator
              //   value={this.state.mobileNumber}
              //   onChange={this.handleChange}
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={"Mobile Number"}
              placeholderTextColor="green"
              validators={["isEmpty"]}
              errorMessages={["This field is required"]}
              keyboardType="number-pad"
              name="mobileNumber"
              style={{ paddingLeft: 10 }}
            />
          </View>

          <View>
            <Text style={{ fontSize: 15, padding: 10 }}>Password </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              marginBottom: 10,
            }}
          >
            <FontAwesome name="lock" size={24} color="black" />
            <TextValidator
              //   value={this.state.empid}
              //   onChange={this.handleChange}
              value={this.state.password}
              validators={["isEmpty"]}
              errorMessages={["This field is required"]}
              onChangeText={(password) => this.setState({ password })}
              placeholder={"Password"}
              placeholderTextColor="red"
              secureTextEntry
              name="password"
              style={{ paddingLeft: 10 }}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onLogin.bind(this)}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              Login3
              {"\n"}
            </Text>
            <Text>{"\n"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            // onPress={this.onLogin.bind(this)}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              Farmer Login
              {"\n"}
            </Text>
            <Text>{"\n"}</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity style={styles.button2}>
              <Text style={{ color: "white", fontSize: 15 }}>Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <Text style={{ color: "white", fontSize: 15 }}>
                Facebook {"\n"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text
              style={{ color: "gold" }}
              onPress={() => Linking.openURL("https://google.com")}
            >
              {"\n"}
              Forget Password?
              {"\n"}
            </Text>

            <Text onPress={() => Linking.openURL("https://google.com")}>
              Dont have account?Sign Up now
              {"\n"}
            </Text>
          </View>
          <View>
            <View style={styles.buble3}></View>
            <View style={styles.buble4}></View>
          </View>
        </Form>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    //     alignItems: "center",
    //     justifyContent: "center",
  },
  text: {
    fontSize: 10,
    justifyContent: "flex-start",
    margin: 10,
    color: "black",
    fontWeight: "bold",
  },

  input: {
    width: 300,
    height: 44,
    paddingLeft: 30,
    borderBottomWidth: 1,

    borderColor: "black",
    marginBottom: 20,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2F9A3C",
    width: "100%",
    height: 44,
    color: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 80,
    borderRadius: 100,
  },
  button1: {
    color: "white",
    alignItems: "center",
    backgroundColor: "#0D68B9",
    width: 150,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#F55362",
    width: 150,
    height: 44,
    padding: 10,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
  },
  buble: {
    backgroundColor: "#78B93B",
    height: 180,
    width: 180,
    marginLeft: -180,
    marginTop: -60,
    borderRadius: 100,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  buble2: {
    backgroundColor: "#FCC93B",
    height: 180,
    width: 180,
    marginTop: -130,
    marginLeft: -80,
    borderRadius: 100,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  buble3: {
    backgroundColor: "#FCC93B",
    height: 170,
    width: 170,
    marginBottom: -270,
    marginRight: -130,
    borderRadius: 100,
    position: "absolute",

    right: 0,

    bottom: 0,
  },
  buble4: {
    backgroundColor: "#78B93B",
    height: 170,
    width: 170,
    marginBottom: -200,
    marginRight: -190,
    borderRadius: 200,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
