import React, { useEffect } from "react";

import { StyleSheet, View, Animated } from "react-native";

const Ball: React.FC = () => {
  const position = new Animated.ValueXY();

  useEffect(() => {
    Animated.spring(position, {
      useNativeDriver: false,
      toValue: { x: 200, y: 500 },
    }).start();
  }, []);

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ballStyle} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ballStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black",
  },
});
export default Ball;
