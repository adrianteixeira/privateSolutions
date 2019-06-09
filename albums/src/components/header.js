import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { textStyle } = styles;

  return (
    <View>
      <Text style={textStyle}>SolucoesTabajara</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

export default Header;
