import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import TransactionScreen from './screens/CycleTransactionScreen'
import SearchScreen from './screens/SearchScreen'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
      <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: TransactionScreen,
  Search: SearchScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
  
      if(routeName === "Transaction"){
        return(
          <Image
          source={require("./assets/transaction.jpg")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Search"){
        return(
          <Image
          source={{uri:"https://cdn.icon-icons.com/icons2/2566/PNG/512/search_icon_153438.png"}}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

