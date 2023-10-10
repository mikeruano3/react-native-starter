import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Button } from "react-native"

const TrackListScreen = () => {
  const navigation = useNavigation()
  return <>
    <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
    <Button 
      title="Go to track detail"
      onPress={() => navigation.navigate('TrackDetail')}
      />
  </>
}

const styles = StyleSheet.create({})

export default TrackListScreen