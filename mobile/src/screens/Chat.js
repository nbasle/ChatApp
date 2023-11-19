import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import Message from "../components/Message";
import NewMessageForm from "../components/NewMessageForm";
import io from "socket.io-client";

//remplacer MESSAGES par messages
const MESSAGES = [
  { id: 0, username: "Test", content: "Salut" },
  { id: 1, username: "test2", content: "Salut 2" },
];

// Socket.io config
const socket = io("http://192.168.1.33:4000");
//const socket = io("http://localhost:4000");

export default function Chat({ username }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    //Room connection
    socket.emit("Join_room", "React Académie");
    //Messages  => envoie + reception
    socket.on("new_message", (data) => {
      console.log("message recu ", data);
      setMessages((current) => {
        return [...current, data];
      });
    });
  }, []);
  const renderItem = ({ item }) => {
    return <Message username={username} message={item} />;
  };
  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "padding" : null}
      scrollEnabled
      style={styles.keyboard}
    >
      <FlatList
        data={/*MESSAGES*/ messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
      <NewMessageForm username={username} socket={socket} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    glex: 1,
    paddingBottom: 10,
  },
  flatList: {
    paddingHorizontal: 20,
  },
});
