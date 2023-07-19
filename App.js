import React, {useEffect, useRef} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Animated,
  useWindowDimensions,
  Easing,
} from 'react-native';
import Loader from './Loader'
const time = 1500;
const App = () => {
  const {height, width} = useWindowDimensions();
  const x_value = new Animated.Value(0);
  const toggle = useRef(false);
  useEffect(() => {
    // moveAnimation();
  }, []);

  const moveAnimation = () => {
    Animated.timing(x_value, {
      toValue: 1,
      duration: time,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => {
      Animated.timing(x_value, {
        toValue: 0,
        useNativeDriver: true,
        easing: Easing.ease,
        duration: time,
      }).start(() => {
        moveAnimation();
      });
    });
  };
  return (
    <SafeAreaView>
      <Animated.View
        style={{
          height: 4,
          width: 40,
          backgroundColor: 'red',
          transform: [
            {
              translateX: x_value.interpolate({
                inputRange: [0, 1],
                outputRange: [0, width - 40],
              }),
            },
          ],
        }}
      />
      <Loader loaderColor={"yellow"}/>
    </SafeAreaView>
  );
};
export default App;
