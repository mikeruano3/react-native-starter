import { View, StyleSheet, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const navigation = useNavigation();
  return <View>
    <Text style={{ fontSize: 48 }}>SigningScreen</Text>
    <Button onPress={()=> navigation.navigate('MainFlow', 'TrackListFlow')} title="press me"/>
  </View>
}

const styles = StyleSheet.create({})

export default SigninScreen