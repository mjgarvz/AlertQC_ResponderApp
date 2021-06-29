import React from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, Button } from "react-native";

const CreateChatScreen = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.inputTitle}>Chat Title:</Text>
          <TextInput
            placeholder="I need some assistance..."
            style={styles.input}
            keyboardType="default"
            autoCapitalize="sentences"
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.inputTitle}>Initial Message:</Text>
          <TextInput
            placeholder="Hi! How are you doing?"
            style={styles.input}
            keyboardType="default"
            autoCapitalize="sentences"
            multiline={true}
          />
        </View>

        <Button title="Start Chat" />
        
      </View>


    </View>
  );
};

CreateChatScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Start A New Chat",
  };
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: Dimensions.get('window').height
  },
  form: {
    padding: 30,
  },
  formControl: {
      paddingVertical: 5
  },
  inputTitle: {
      fontFamily: 'open-sans-bold',
      fontSize: 15
  },
  input: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingVertical: 5
  }
});

export default CreateChatScreen;
