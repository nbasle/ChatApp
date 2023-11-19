import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Platform,
} from "react-native";
import Welcome from "./src/screens/Welcome";
import Chat from "./src/screens/Chat";
import { useState } from "react";
export default function App() {
  //username
  const [username, setUsername] = useState("");

  const saveUserName = (name) => {
    setUsername(name);
  };
  //welcome
  if (username === "") {
    return (
      <SafeAreaView style={styles.container}>
        <Welcome saveUserName={saveUserName} />
      </SafeAreaView>
    );
  }
  //Chat
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>{username}</Text>*/}
      <Chat username={username} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
