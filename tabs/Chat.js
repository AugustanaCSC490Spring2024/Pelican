import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ScrollView, Alert, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

  
export default function App() {

    let [products, setName] = React.useState(
        ['POLO Sweater', 'iPhone X', 'Galaxy S9', 'Used Textbook', 'Coffee Machine', 'Easter Egg', 'Nuke']
    );
    
    let [sellers, setSeller] = React.useState(
        ['jslee402', 'XanderBender', 'SobanTuban', 'StephanieCurry', 'Stonedahl101', 'Rockdahl102', 'username40428']
    )
    
    let [likes, setLikes] = React.useState(
        [0,0,0,0,0,0,0]
    )

    let [messages, setMsg] = React.useState(
        ['Can we do 10 dollars instead?', 'Can I buy?', 'Nobody is buying your Galaxy', 'Just give it to me', 
        'Wanna trade with my Pokemon cards?', 'No way it is free!', 'I will buy - Kim']
    )

    let copyMsg = [...messages];

    // function Chat() {
    //     return (
    //       <TouchableOpacity style={styles.post} onPress={ ()=>{ Alert.alert('You tapped on the chat!') } }>
    //         <Image style={styles.tinyLogo} source={require('../assets/icon.png')} />
    //         <View style={styles.description}>
    //           <Text style={styles.postTitle}>Product name</Text>
    //           <Text style={styles.chatLog}>Can we do 10 dollars instead?</Text>
    //         </View>
    //       </TouchableOpacity>
    //     )
    //   }

    return (
        <ScrollView>
            {
                products.map(function(prd, i){
                    return (
                        <TouchableOpacity style={styles.post} onPress={ ()=>{ Alert.alert('You tapped on the chat!') } }>
                            <Image style={styles.tinyLogo} source={require('../assets/icon.png')} />
                            <View style={styles.description}>
                                <Text style={styles.postTitle}>{ prd }</Text>
                                <Text style={styles.chatLog}>{ copyMsg[i] }</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    post: {
      flex: 1,
      flexDirection: 'row',
      width: "100%",
      marginBottom: 5,
      marginTop: 5,
      paddingLeft: 5
    },
    tinyLogo: {
      width: 100,
      height: 100,
      flex: 1
    },
    description: {
      flex: 2,
      padding: 10,
      textAlign: 'left'
    },
    seller: {
      color: 'grey'
    },
    postTitle: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    chatLog: {
      color: 'grey'
    }
  });
  