import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { black } from "ansi-colors";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconSize} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        style={styles.inputStyle}
        placeholder="Search"
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 50,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    fontSize: 18
  },
  iconSize: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
