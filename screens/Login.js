import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../components/shared/Input";
import {SigninSchema} from '../validations/Validations';
import Button from "../components/shared/Button";

const Login = () => {
  const handleLogin = (values) => {
    console.log("Submit Form with values:", values);
    resetForm();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome Back</Text>
      <Text style={styles.subheadingText}>Sign in to continue</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={handleLogin}
      >
        {({
          errors,
          touched,
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
          values,
        }) => (
          <View>
            <Input
              placeholder="EMAIL"
              iconName="mail"
              value={values.email}
              onChange={handleChange("email")}
              error={errors.email}
              touched={touched.email}
              onBlur={() => setFieldTouched("email")}
            />
            <Input
              placeholder="PASSWORD"
              iconName="password"
              value={values.password}
              onChange={handleChange("password")}
              error={errors.password}
              touched={touched.password}
              onBlur={() => setFieldTouched("passwordy")}
              secureTextEntry
            />
            <Button
                  title="LOGIN"
                  backgroundColor="#008955"
                  textColor="#FFFFFF"
                  borderColor="#008955"
                  onPress={handleSubmit}
                  isValid={isValid}
                  disabledBackgroundColor="#8edba4"
                />
             
            <View style={styles.passwordTextWrapper}>
              <Text style={styles.passwordText}>Forget Password?</Text>
            </View>
          </View>
        )}
      </Formik>
      <View style={styles.accountWrapper}>
        <Text>
          Don't have an account?{" "}
          <Text
            style={styles.accountText}
            
          >
            Create a new account
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:20,
    backgroundColor: '#fff',
  },
  headingText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign:'center'
  },
  subheadingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#aeb0af',
    textAlign:"center"
  },
  passwordText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#01ba76',
  },
  passwordTextWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  accountWrapper: {
    marginTop: 32,
    alignItems:"center"
    
  },
  accountText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#01ba76',
  },
});
