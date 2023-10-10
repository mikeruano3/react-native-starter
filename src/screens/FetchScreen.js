import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import yelp from "../api/yelp"
import ResultList from "../components/ResultList"

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
        results ? <ResultList results={results} title="Results"/> : <Text>No results</Text>
    )
}

export default FecthScreen