import { View, StyleSheet, } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Text, Input, Button } from 'react-native-elements'
import Spacer from "../../components/trackerApp/Spacer";
import { useState, useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext)
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return <View style={styles.container}>
    <Spacer>
      <Text h3>Sign Up for Tracker</Text>
    </Spacer>
    <Input label="Email" 
      value={email} onChangeText={setEmail}
      autoCapitalize="none" autoCorrect={false} />
    <Spacer />
    <Input label="Password" 
      secureTextEntry
      value={password} onChangeText={setPassword}
      autoCapitalize="none" autoCorrect={false} 
    />
    {state.errorMessage && <Text style={styles.errorMessage}>{state.errorMessage}</Text>}
    <Spacer>
      <Button onPress={() => signup({ email, password })} title="Sign up" />
    </Spacer>
  </View>
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 10,
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
})

export default SignupScreen