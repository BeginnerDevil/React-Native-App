import React, { Component } from 'react';
import { Text, View ,ImageBackground,TextInput,Button,Alert }from 'react-native';
import{StackNavigator,TabNavigator} from 'react-navigation'

export default class Login extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            name:'',
            Password:'',
            ispassword:true,
        }
        this.alertTitle=this.alertTitle.bind(this);
    }
    alertTitle(){
      const {navigate} = this.props.navigation;
      if (this.state.name == 'Devil' && this.state.Password == '123') {
        Alert.alert('提示','登陆成功');
        setTimeout(()=>{
          navigate('hello',{
            id:1
          })
          } 
        ,500)
      } else {
        Alert.alert('提示','登陆失败');
        
      }
       
    }
  render() {
    return <View style={sytles.indexImg} >
            <ImageBackground 
            source={require('../../images/index/background-image.png')}
            style={sytles.bgimg}
            >
            <Text style={sytles.title}>login</Text>
              <TextInput
              style={sytles.inputChenge}
              placeholder="UserId"
              placeholderTextColor="#fff"
              value ={this.state.name}
              onChangeText={(text) => {
                  this.setState({name:text})
              }}
              ></TextInput>
               <TextInput
              style={sytles.inputChenge}
              password={this.ispassword}
              placeholder="Password"
              placeholderTextColor="#fff"
              value ={this.state.Password}
              onChangeText={(text) => {
                this.setState({Password:text})
                console.log(this.state.ispassword)
            }}
              ></TextInput>
              <View style={sytles.btnLogin}>
              <Button color="#fff" title='Go'
              onPress={this.alertTitle}
              ></Button>
              </View>
            </ImageBackground>
            
        </View>
    
  }
}
const sytles = {
  indexImg:{
    flex:1,
  },
  title:{
    marginTop:100,
    textAlign:'center',
    fontSize:50,
    fontWeight:'bold',
    color:'#fff'
  },
  bgimg:{
    flex:1,
    alignItems:'center'

  },
  inputChenge:{
    borderBottomWidth:1,
    borderColor:'#fff',
    width:260,
    height:60,
    color:'#fff',
    fontSize:20,
    marginTop:100,
  },
  btnLogin:{
    backgroundColor:'#13bdbf',
    textAlign:'center',
    width:260,
    height:40,
    marginTop:150,
    borderRadius:5,
  }
}