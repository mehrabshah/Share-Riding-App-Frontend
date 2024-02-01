import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Route from './routing/Route';
export default function App() {
  return (
    <>

       <View style={styles.container}>
         <Route/>
       </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 100,    

  },
});
