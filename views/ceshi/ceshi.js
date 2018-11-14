import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
export default class ceshi extends Component {

    render() {

        return <View style={styles.box}>
            <Text style={styles.title}>
                这是标题
        </Text>
            <Text style={styles.charblack}>
                岳瑶是只猪
        </Text>
            <Text style={styles.charRed}>
                🐷🐷🐷🐷🐷🐷
        </Text>
        </View>
    }
}
const styles = {
    bigbox: {
        flex: 1,
    },
    title: {
        color: '#333',
        fontSize: 30,
        textAlign: 'center',
        lineheight: 50,
    },
    charblack: {
        color: 'pink',
        fontSize: 20,
        lineheight: 40,

    },
    charRed: {
        color: 'pink',
        fontSize: 15,
        lineheight: 20,
    }
}