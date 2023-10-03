import React from "react";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const ListWithChildren = ({ style: styleProp }) => {
  return <View style={{ ...styles.viewStyle, ...styleProp}}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
  </View>
}

const ListWithDiferentText = ({ style: styleProp }) => {
  return <View style={{ ...styles.viewStyle, ...styleProp}}>
      <Text style={styleProp.text1}>Child #1</Text>
      <Text style={styleProp.text2}>Child #2</Text>
      <Text style={styleProp.text3}>Child #3</Text>
  </View>
}

const HomeScreen = () => {
  return <View>
    <ListWithChildren style={styles.flexVariation1}/>
    <ListWithChildren style={styles.flexVariation2}/>
    <ListWithChildren style={styles.flexVariation3}/>
    <ListWithChildren style={styles.flexVariation4}/>
    <ListWithDiferentText style={styles.flexVariation5}/>
    <ListWithDiferentText style={styles.flexVariation6}/>
    <ListWithDiferentText style={styles.absoluteStyles}/>
    <ListWithDiferentText style={styles.absoluteStyles2}/>
    <ListWithDiferentText style={styles.fillStyle}/>
  </View>;
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    marginLeft: 3,
  },
  textStyle: {
    borderWidth: 2,
    borderColor: 'red'
  },
  flexVariation1: {
    alignItems: 'flex-end'
  },
  flexVariation2: {
    alignItems: 'center'
  },
  flexVariation3: {
    flexDirection: 'row',
    height: 25,
    justifyContent: 'space-around'
  },
  flexVariation4: {
    flexDirection: 'column',
    height: 140,
    justifyContent: 'space-between'
  },
  flexVariation5: {
    flexDirection: 'row',
    height: 50,
    text1: {
      borderWidth: 2,
      borderColor: 'red',
    },
    text2: {
      borderWidth: 2,
      borderColor: 'red',
      flex: 1, // takes as much as possible|
    },
    text3: {
      borderWidth: 2,
      borderColor: 'red',
    },
  },
  flexVariation6: {
    flexDirection: 'column',
    height: 75,
    alignItems: 'center',
    text1: {
      borderWidth: 2,
      borderColor: 'red',
    },
    text2: {
      borderWidth: 2,
      borderColor: 'red',
      alignSelf: 'flex-start' // 
    },
    text3: {
      borderWidth: 2,
      borderColor: 'red',
      alignSelf: 'flex-end'
    },
  },
  absoluteStyles: {
    flexDirection: 'column',
    height: 70,
    alignItems: 'flex-end',
    text1: {
      borderWidth: 2,
      borderColor: 'red',
    },
    text2: {
      borderWidth: 2,
      borderColor: 'red',
      fontSize: 28,
      position: 'absolute',
    },
    text3: {
      borderWidth: 2,
      borderColor: 'red',
      alignSelf: 'flex-end'
    },
  },
  absoluteStyles2: {
    flexDirection: 'column',
    height: 70,
    alignItems: 'flex-start',
    text1: {
      borderWidth: 2,
      borderColor: 'red',
    },
    text2: {
      borderWidth: 2,
      borderColor: 'red',
      bottom: 10,
      left: 10
    },
    text3: {
      borderWidth: 2,
      borderColor: 'red',
    },
  },
  fillStyle: {
    flexDirection: 'column',
    height: 80,
    alignItems: 'flex-start',
    text1: {
      borderWidth: 2,
      borderColor: 'red',
    },
    text2: {
      borderWidth: 15,
      borderColor: 'lightblue',
      fontSize: 18,
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'absolute',
      ...StyleSheet.absoluteFillObject,
    },
    text3: {
      borderWidth: 2,
      borderColor: 'red',
    },
  }
});

export default HomeScreen;
