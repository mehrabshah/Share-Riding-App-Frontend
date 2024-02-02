import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Button from "../components/Button";
import Signup from "./Signup";

const Welome = ({ navigation }) => {
  const Signup = () => {
    navigation.navigate("Signup");
  };
  const Login = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/Images/Welcome.png")} />
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.Paragraph}>Have a better meeting experience</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Create an account"
          backgroundColor="#008955"
          textColor="#FFFFFF"
          borderColor="#008955"
          onPress={Signup}
        />
        <Button
          title="Log In"
          borderColor="#008955"
          textColor="#008955"
          onPress={Login}
        />
      </View>
    </>
  );
};
export default Welome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    color: "#000000",
    fontWeight: "900",
    fontSize: 22,
    marginTop: 10,
  },
  Paragraph: {
    color: "#A0A0A0",
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 190,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
