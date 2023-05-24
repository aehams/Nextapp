import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useContext, useState} from 'react';
import {View, StyleSheet, Text, Image,SafeAreaView,TouchableOpacity,TextInput} from 'react-native';
import COLORS from '../../consts/colors';
import CustomButton from './CustomButton';
import InputFleled from './InputFleled';
import Context from '../../Condext&&provider/Context';
import { useNavigation } from '@react-navigation/native';



const SignOut = props => {
    const[mail,setEmail]=useState(null);
    const[password,setPassword]=useState(null);
    const val = useContext(Context);
    // const {User}=useContext(Context);
    const navigation = useNavigation();

    // const userCondition =()=>{
    //     if (mail.length==0&&password.length==0){
    //         // setAlert('! pleas enter data')
    //         return(false)
    //     }
    //     if (mail.includes(" ")){
    //         // setAlert("mail should not includes spaces\" \"")
    //         return(false)
    //     }
    //     if (!mail.includes("@")){
    //         // setAlert("mail should includes @")
    //         return(false)
    //     }
    //     if (!mail.includes(".com")){
    //         // setAlert("mail should includes .com")
    //         return(false)
    //     }
    //     // if(userName.includes(" ")){
    //     //     setAlert("user should not includes spaces\" \"")
    //     //     return(false)
    //     // }
    //     // if(userName.length<4){
    //     //     setAlert("user length should be at least 4")
    //     //     return(false)
    //     // }
    //     if(password.length<8){
    //         // setAlert("password length should be at least 8")
    //         return(false)
    //     }
    //     // setAlert('')
    //     return(true)
    // }
    // const {login}=useContext(AuthContecxt);
    // const {User}=useContext(Context);

    // const SetData = async () => {//set data and log in
    //     let users=await AsyncStorage.getAllKeys()
    //     if(!users.includes()){
    //         if(userCondition()){
    //             User.mail=mail
    //             // User.name=userName
    //             User.password=password
    //             User.login=true
    //             // User.image=image
    //             // User.imageBackground=imageBackground

    //             AsyncStorage.setItem(User)
    //             props.navigation.navigate(DraweNavigator)
    //         }
    //         if(users.includes()){
    //             setAlert('thare anther user in this name')
    //         }
    //     }
    //     else{
    //         setAlert('thare anther user in this name')
    //     }
    // }

    return (
        <SafeAreaView style={styles.continer}>
            <View style={{paddingHorizontal:25}}>
                <View style={styles.continerimg}>
                    <Image source={require('../../assets/infood/imgfood.jpg')} style={styles.img}/>
                </View>
                <Text style={styles.text}>Login</Text>
                <Text style={styles.text}>{val}</Text>
                <InputFleled label={'Email ID'} 
                    icon={<Image source={require('../../assets/email.png')} style={styles.img1}/>}
                    keyboardType="email-address"
                    value={mail}
                    onChangeText={text=>setEmail(text)}
                />
                <InputFleled label={'password'}
                    icon={<Image source={require('../../assets/pasword.png')} style={styles.img1}/>}
                    inputType="password"
                    fieldButtonLabel={"forgot ?"}
                    fieldButtonFunction={()=>{}}
                    value={password}
                    onChangeText={text=>setPassword(text)}
                />
                <CustomButton label={"Longin"} onPress={()=>{SetData()}}/>
                <Text style={styles.text3}>Or, Login with ..</Text>
                <View style={styles.continer3}>

                    <TouchableOpacity onPress={()=>{}} style={styles.TouchableOpacity1}>
                        <Image source={require('../../assets/longimg/google.png')} style={styles.img2}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{}} style={styles.TouchableOpacity1}>
                        <Image source={require('../../assets/longimg/facbook.png')} style={styles.img2}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{}} style={styles.TouchableOpacity1}>
                        <Image source={require('../../assets/longimg/twitter.png')} style={styles.img2}/>
                    </TouchableOpacity>

                </View>
                <View style={styles.continer4}>
                    <Text style={{fontSize:17}}>New to the app?</Text>

                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                        <Text style={styles.text4}>  Register</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    continer:{
        flex:1,
        justifyContent:'center',
    },
    continer2:{
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingBottom:8,
        marginBottom:25
    },
    continer3:{
        flexDirection:'row',
        justifyContent:'space-between', 
        marginBottom:30,
    },
    continer4:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:30,
    },
    continerimg:{
        alignItems:'center',
    },
    img:{
        height:300,
        width:300,
        borderRadius: 25
    },
    img1:{
        width:25,
        height:25,
        marginTop:10,
        marginRight:5
    },
    img2:{
        height:35,
        width:35,
    },
    text:{
        fontFamily:'Roboto-Medium',
        fontSize:30,
        fontWeight:'700',
        color:COLORS.dark,
        marginBottom:30
    },
    text1:{
        color:'red',
        fontWeight:'700',
        marginTop:10
    },
    text2:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:19,
        color:COLORS.white
    },
    text3:{
        textAlign:'center',
        color:'#666',
        marginBottom:30,
    },
    text4:{
        color:COLORS.reed,
        fontWeight:'700',
        fontSize:17,
    },
    TextInput:{
        flex:1,
        paddingVertical:0
    },
    TouchableOpacity:{
        backgroundColor:'red',
        padding:20,
        borderRadius:10,
        marginBottom:20,
    },
    TouchableOpacity1:{
        backgroundColor:'#ddd',
        borderWidth:2,
        borderRadius:10,
        paddingHorizontal:30,
        paddingVertical:10,
    },
})

export default SignOut;