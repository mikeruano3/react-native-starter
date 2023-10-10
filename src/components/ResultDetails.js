import { StyleSheet, View, Text, Image } from "react-native"

const ResultDetails = ({ result: { name, image_url, rating, review_count } }) => {
  return <View style={styles.container}>
    <Image style={styles.image} source={{ uri: image_url}}/>
    <Text style={styles.name}>{name}</Text>
    <Text>{rating} Stars, {review_count} Reviews</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default ResultDetails