import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ScrollView, Alert, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function Home() {

  let [products, setName] = React.useState(
    ['POLO Sweater', 'iPhone X', 'Galaxy S9', 'Used Textbook', 'Coffee Machine', 'Easter Egg', 'Nuke']
  );

  let [price, setPrice] = React.useState(
    ['$15', '$200', '$220', '$20', '$22', 'Free', '$1,000,000']
  )

  let [sellers, setSeller] = React.useState(
    ['jslee402', 'XanderBender', 'SobanTuban', 'StephanieCurry', 'Stonedahl101', 'Rockdahl102', 'NorthKorea']
  )

  let [likes, incLikes] = React.useState(
    [0,0,0,0,0,0,0]
  )

  let copyPrice = [...price]
  let copySeller = [...sellers]

  function Post() {
      return (
        <TouchableOpacity style={styles.post} onPress={ ()=>{ Alert.alert('You tapped on the product!') } }>
        <Image style={styles.tinyLogo}
          source={require('../../assets/icon.png')}/>
        <View style={styles.description}>
          <Text style={styles.postTitle}>{ copy[1] }</Text>
          <Text style={styles.seller}>jslee402</Text>
          <Text style={styles.postPrice}>$15</Text>
        </View>
      </TouchableOpacity>
      )
  }

    return (
      <ScrollView>
        {
          products.map(function(prd, i){
            return(
              <TouchableOpacity style={styles.post} onPress={ ()=>{ Alert.alert('You tapped on the product!') } } key={i}>
                <Image style={styles.tinyLogo} source={require('../../assets/icon.png')}/>
                <View style={styles.description}>
                  <Text style={styles.postTitle}>{ prd }</Text>
                  <Text style={styles.seller}>{ copySeller[i] }</Text>
                  <Text style={styles.postPrice}>{ copyPrice[i] }</Text>
                </View>
                <View style={styles.likes}>
                  <Text
                    style={styles.따봉}
                    onPress={ ()=> {
                    let copyLikes = [...likes];
                    copyLikes[i] = copyLikes[i]+1;
                    incLikes(copyLikes);
                    } }
                  >👍</Text>
                  <Text style={styles.따봉갯수}>{ likes[i] }</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    marginBottom: 5,
    marginTop: 5,
    // paddingLeft: 5
    padding: 5
  },
  tinyLogo: {
    width: 100,
    height: 100,
    flex: 1
  },
  description: {
    flex: 3,
    paddingLeft: 15,
    // marginRight: 3,
    textAlign: 'left'
  },
  seller: {
    color: 'grey'
  },
  postTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  likes: {
    flex: 0.8,
    flexDirection: 'row',
    textAlign: 'center',
    paddingTop: 25
  },
  따봉: {
    fontSize: 25,
    marginLeft: 5
  },
  따봉갯수: {
    fontSize: 25
  }
});
