import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { withNavigation } from 'react-navigation'
import ResultDetails from "./ResultDetails"
import { useNavigation } from "@react-navigation/native";

const ResultList = ({ title, results, route }) => {
  const navigation = useNavigation();
  return <View>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={result => result.id}
      renderItem={({ item }) => {
        return <TouchableOpacity 
          onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
          <ResultDetails result={item}/>
        </TouchableOpacity>
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default ResultList