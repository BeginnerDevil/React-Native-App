import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
export default class List extends Component {

    render() {


        return (
            <View style={{ flex: 1,marginTop:20 }}>
                <FlatList
                    style={styles.bigbox}
                    data={listArr}
                    renderItem={({ item }) => {
                        return <View style={styles.box}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <Text style={styles.charblack}>
                                {item.charblack}
                            </Text>
                            <Text style={styles.charRed}>
                                {item.content}
                            </Text>
                        </View>
                    }}
                ></FlatList>
            </View>
        )
    }
}
const listArr = [{
    title: '这是标题',
    charblack: '这是内容：',
    content: '岳瑶是只猪'
},
{
    title: '这是标题',
    charblack: '这是内容：',
    content: '岳瑶是只猪'
},
{
    title: '这是标题',
    charblack: '这是内容：',
    content: '岳瑶是只猪'
},
{
    title: '这是标题',
    charblack: '这是内容：',
    content: '岳瑶是只猪'
},
{
    title: '这是标题',
    charblack: '这是内容：',
    content: '岳瑶是只猪'
},
{
    title: '这是标题',
    charblack: '这是内容：',
    content: '岳瑶是只猪'
},]

const styles = {
    bigbox: {
        marginTop:0,
    },
    title: {
        color: '#333',
        fontSize: 30,
        textAlign: 'center',
        lineheight: 50,
    },
    charblack: {
        color: '#ccc',
        fontSize: 15,
        lineheight: 20,

    },
    charRed: {
        color: 'pink',
        fontSize: 15,
        lineheight: 20,
    }
}