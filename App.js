import { View, Text, Platform, SafeAreaView } from 'react-native';
import { Home, Post, Chat } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShowen: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: '12%',
    backgroundColor: '#fff'
  }
}

function BottomTab() {
  return(
    <Tab.Navigator screenOptions={ screenOptions }>
        <Tab.Screen  
          name="Home" 
          component={ Home } 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Entypo name="home" size={24} color={focused ? "#16247d" : '#aaa'} />
                  <Text>HOME</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen  
          name="Post" 
          component={ Post } 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View 
                  style={{ 
                    top: Platform.OS == 'ios' ? -10 : -20,
                    width: Platform.OS == 'ios' ? 60 : 70,
                    height: Platform.OS == 'ios' ? 60 : 70,
                    borderRadius: Platform.OS == 'ios' ? 30 : 30,
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: '#16247d' 
                  }}
                >
                  <AntDesign name="plus" size={24} color={focused ? "#fff" : '#aaa'} />
                  
                </View>
              )
            }
          }}
        />
        <Tab.Screen  
          name="Chat" 
          component={ Chat } 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Entypo name="chat" size={24} color={focused ? "#16247d" : '#aaa'} />
                  <Text>CHAT</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer screenOptions={ screenOptions }>
      <BottomTab/>
    </NavigationContainer>
  );
}