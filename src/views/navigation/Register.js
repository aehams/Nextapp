import React,{useState} from 'react';
import {View, StyleSheet, Text, Image,SafeAreaView,TouchableOpacity,TextInput, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker'
import COLORS from '../../consts/colors';
import CustomButton from './CustomButton';
import InputFleled from './InputFleled';

const Register = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <SafeAreaView style={styles.continer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingHorizontal:25}}>
                    <View style={styles.continerimg}>
                        <Image source={require('../../assets/infood/imgfood.jpg')} style={styles.img}/>
                    </View>
                    <Text style={styles.text}>Register</Text>
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
                    <Text style={styles.text3}>Or, register with Email ...</Text>
                    <InputFleled label={'Full Name'}
                        icon={<Image source={require('../../assets/longimg/outlen.png')}style={styles.img3}/>}
                        style={styles.img1}
                    />
                    <InputFleled label={'Email ID'}
                        icon={<Image source={require('../../assets/email.png')} style={styles.img1}/>}
                        keyboardType="email-address"
                    />
                    <InputFleled label={'password'}
                        icon={<Image source={require('../../assets/pasword.png')} style={styles.img1}/>}
                        inputType="password"
                    />
                    <InputFleled label={'Confirm password'}
                        icon={<Image source={require('../../assets/pasword.png')} style={styles.img1}/>}
                        inputType="password"
                    />
                    <View style={styles.continer2}>
                        <Image source={require('../../assets/longimg/calender.png')} style={styles.img1}/>
                        <TouchableOpacity onPress={()=> setOpen(true)}>
                            <Text style={{marginTop:10,color:'#666',marginLeft:5}}>Date of Birth</Text>
                        </TouchableOpacity>
                    </View>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                        setOpen(false)
                    }}/>
                    <CustomButton label={"Register"} onPress={()=>{}}/>
                    
                    <View style={styles.continer4}>
                        <Text style={{fontSize:17}}>Alredy registered ?</Text>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Text style={styles.text4}>  Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        marginBottom:30
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
    img3:{
        width:30,
        height:30,
        marginTop:10,
        marginRight:5 
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
        fontSize:15,
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

export default Register;