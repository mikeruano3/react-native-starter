import React, {useState, useEffect} from 'react'
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from "react-native"
import yelp from '../api/yelp'

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null)
  const id = route.params.id

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`)
      setResult(response.data)  
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if(!result) return null

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Results show</Text>
      <Text>Id {result.id}</Text>
      <Text>Name {result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo)=> photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }}/>
        }}  
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    height: 300,
    width: 300,
  }
})

export default ResultsShowScreen