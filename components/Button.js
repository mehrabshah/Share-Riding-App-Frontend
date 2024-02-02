import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({
  onPress,
  title,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor, borderColor }]}
    >
      <View style={styles.buttonContainer}>
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Button;
