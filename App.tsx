import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const INPUT_TEXT_VALID = 'valid';
export const INPUT_TEXT_INVALID = 'invalid';

export default function App() {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ inputText, setInputText ] = useState("");

  const handleOnPress = () => {
    const isValid = inputText === INPUT_TEXT_VALID;
    setIsLoading(!isValid);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        onChangeText={setInputText}
        value={inputText}
        testID="input"
      />

      <TouchableOpacity onPress={handleOnPress} disabled={isLoading} testID="button">
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
