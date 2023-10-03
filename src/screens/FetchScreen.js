import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import yelp from "../api/yelp"

const FecthScreen = () => {
    const [ results, setResults ] = useState([])

    useEffect(() => {
        (async () => {
            const response = await yelp.get('/search', {
                params: {
                    limit: 10,
                    location: 'NYC'
                }
            })
            setResults(response.data.businesses)
        })()
       
    })

    return (
        <View>
            <Text>Fecthed data</Text>
            <Text>{JSON.stringify(results)}</Text>
        </View>
    )
}

export default FecthScreen