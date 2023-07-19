/* eslint-disable class-methods-use-this */
import React, {Component} from 'react';
import {
  Image,
  Text,
  Modal,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const viewWidth = WIDTH - 30;
const time = 1500

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.x_value = new Animated.Value(0);
    
  }
 
  componentDidMount() {
    
    this.moveAnimation();
  }

  moveAnimation = () => {
     console.log("mobe animartion called")

     Animated.timing(this.x_value, {
        toValue: 1,
        duration: time,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start(() => {
        Animated.timing(this.x_value, {
          toValue: 0,
          useNativeDriver: true,
          easing: Easing.ease,
          duration: time,
        }).start(() => {
         this.moveAnimation();
        });
      });
  };

  render() {
 


    return (

          <Animated.View
            style={[
              styles.loaderAnimater,
                {transform:[{translateX: this.x_value.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, viewWidth],
                  })}]  },
            ]}
          />
 

    );
  }
}

const styles = StyleSheet.create({
    ModalContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      backgroundColor: 'red',
      color: 'red',
    },
    LoaderContainer: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      alignSelf: 'stretch',
      width: WIDTH,
      backgroundColor: 'blue',
    },
    loaderAnimater: {
   
    
      backgroundColor: 'green',
      height: 4,
    width:50
    },
    MsgContainerText: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: 'white',
      width: WIDTH,
      padding: '5%',
      minHeight: 150,
    },
    LoaderText: {
      color: 'red',
      fontSize: 14,
      fontWeight: '400',
      // lineHeight: 14,
      textAlign: 'center',
    },
    msgComponentStyle: {},
    congratulationsTextStyle: {
      color: 'green',
      fontSize: 14,
      fontWeight: '600',
      lineHeight: 19,
      textAlign: 'center',
      marginVertical: '2%',
    },
    loadingIconStyle: {alignSelf: 'center', marginVertical: '2%'},
    hideSection: {display: 'none'},
  });