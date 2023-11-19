import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Welcome({ saveUserName }) {
 
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue!</Text>
      <Text style={styles.caption}>Nom d'utilisateur</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Pressable style={styles.button} onPress={() => saveUserName(username)}>
        <Text style={styles.btnCaption}>Enregistrer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  caption: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginBottom: 20,
    height: 40,
    width: 150,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnCaption: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});
