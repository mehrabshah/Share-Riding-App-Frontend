import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
} from "react-native";

const Welome = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require("../assets/Images/Welcome.png")} />
          <Text>Welcome</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Welome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  headingText:{
   color:'#000000',
   fontWeight:'bold'
  }
});
