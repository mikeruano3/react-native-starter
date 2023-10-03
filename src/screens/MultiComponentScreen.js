import React, { useState } from "react"
import { TextInput } from "react-native"
import { View, Text, StyleSheet, 
    FlatList, TouchableOpacity, Button } from 'react-native'

const DividerLine = () => {
    return <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 3, backgroundColor: 'black'}} />
    </View>    
}

const ContainerScreen = ({ navigation: { navigate} }) => {
    return <View style={{flexDirection: 'column', alignItems: 'center'}}>
    <Text>Container Screen</Text>
    <DividerLine/>
    <Buttons onPress={() => navigate('Navigate')}/>
    <DividerLine/>
    <Button onPress={() => navigate('Position')} title="PositionScreens" />
    <DividerLine/>
    <Button onPress={() => navigate('FetchScreen')} title="FetchScreen" />
    <DividerLine/>
    <InputText/>
    <DividerLine/>
    <ListScreen/>
</View>
}

const ListScreen = () => {
    const data = [
        {name: 'qwe',  key: 1},      
        {name: 'qwe2', key: 2},
        {name: 'qwe32', key: 3},    
    ]
    return <View style={{flexDirection: 'column', alignItems: 'left'}}>
        <Text>List Screen</Text>
        <FlatList
            keyExtractor={item => item.key}
            data={data}
            renderItem={({ item }) => {
                return <Text style={styles.listTextStyle}>{item.name}</Text>
            }}
        />
    </View>
}

const Buttons = (props) => {
    const { onPress } = props
    return <View>
        <Button
            onPress={onPress}
            title="Go to something"
        />
        <TouchableOpacity>
            <Text>This is a touchable area</Text>
        </TouchableOpacity>
    </View>
}

const InputText = () => {
    const [name, setName] = useState('enter text here')
    return <View>
        <TextInput 
            style={styles.inputStyle}
            value={name}
            onChangeText={setName}
            />
    </View>
}

const styles = StyleSheet.create({
    dividerStyle: {
        marginVertical: 2,
        color: 'black'
    },
    listTextStyle: {
        marginVertical: 2
    },
    inputStyle: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default ContainerScreen