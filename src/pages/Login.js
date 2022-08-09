import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Log in</Text>

      <View style={styles.input_field}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.forgot_link}>
        <Text style={styles.forgot_text}>Forgot Password ?</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.login_link}>
          <Text style={styles.login_text}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.no_Account}>
        <Text style={styles.signin_text}>
          Don't have account?
          <TouchableOpacity
            style={styles.signin_link}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text style={styles.signin_linktxt}>Signin</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 50,
  },
  header: {
    fontSize: 35,
    color: "purple",
    fontWeight: "600",
  },
  input_field: {
    marginTop: 60,
  },
  input: {
    marginVertical: 19,
    borderBottomWidth: 1,
    borderBottomColor: "purple",
  },
  forgot_link: {
    marginLeft: 110,
  },
  forgot_text: {
    color: "dodgerblue",
  },
  login_link: {
    backgroundColor: "purple",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 60,
  },
  login_text: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
    color: "white",
  },
  no_Account: {
    marginTop: 30,
  },
  signin_text: {
    alignSelf: "center",
    fontSize: 16,
  },

  signin_linktxt: {
    flex: 1,
    marginLeft: 20,
    fontWeight: "bold",
    color: "purple",
 
  },
});
