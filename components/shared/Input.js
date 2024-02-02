// Input.js
import React from 'react';
import {View, TextInput, StyleSheet,  Text} from 'react-native';

const Input = ({
  placeholder,
  value,
  onBlur,
  onChange,
  touched,
  error,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
         
        />
      </View>
      {touched && error && (<Text style={styles.errorText}>{error}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
 
  inputContainer: {
    padding: 8,
    margin: 20,
    marginBottom: 0,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginStart: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});

export default Input;