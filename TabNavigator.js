
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ScanButton from './components/ScanButton/ScanButton';
// import SearchResults from './components/searchResults/SearchResults';
// import Drinks from './components/drinks/Drinks';

// const Tab=createBottomTabNavigator()

// export default function TabNavigator() {
//   return (

// <NavigationContainer>
//     <Tab.Navigator
//         screenOptions={{
//           headerShown: false,
//           tabBarStyle: {
//             height: 70, // Set the height of the tab bar
//             borderRadius: 30, // Set the border radius of the tab bar
//             elevation: 10, // Add a shadow effect (only works on Android)
//             marginTop: 10,
//             marginBotom: 10,
//           },

//           tabBarActiveTintColor: 'orange', // Customize the active tab color
//           tabBarInactiveTintColor: 'black', // Customize the inactive tab color
//           tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
//           tabBarTabStyle: { paddingBottom: 5 },
//         }}


//       >


      

//         <Tab.Screen
//           name='Scan'
//           component={ScanButton}

//           options={{
//             tabBarLabel: '',
//             tabBarIcon: ({ focused }) => {
//               letIconColor = focused ? 'orange' : 'black';
//               return <Ionicons name="ios-home-outline" size={24} color={letIconColor} style={{marginTop:15}}/>
//             },
//             tabBarVisible:false
            
//           }}
//         />
//         <Tab.Screen
//           name='Notification'
//           component={ScanButton}
//           options={{
//             tabBarLabel: '',
//             tabBarIcon: ({ focused }) => {
//               letIconColor = focused ? 'orange' : 'black';
//               return <Ionicons name="notifications-outline" size={24} color={letIconColor} style={{marginTop:15}} />
//             }
//           }}
//         />
//         <Tab.Screen
//           name='Search'
//           component={SearchResults}

//           options={{
//             tabBarLabel: '',
//             tabBarIcon: ({ focused }) => {
//               letIconColor = focused ? 'orange' : 'black';
//               return <Ionicons name="list" size={24} color={letIconColor} style={{marginTop:20}}/>
//             }
//           }}



//         />
//         <Tab.Screen
//           name='Payment'
//           component={ScanButton}

//           options={{
//             tabBarLabel: '',
//             tabBarIcon: ({ focused }) => {
//               letIconColor = focused ? 'orange' : 'black';
//               return <Ionicons name="ios-time-outline" size={24} color={letIconColor} style={{marginTop:15}}/>
//             }
//           }}


//         />
//         <Tab.Screen
//           name='Drinks'
//           component={Drinks}

//           options={{
//             tabBarLabel: '',
//             tabBarIcon: ({ focused }) => {
//               letIconColor = focused ? 'orange' : 'black';
//               return <Ionicons name="md-cart-outline" size={24} color={letIconColor} style={{marginTop:15}}/>
//             },
            
//           }}

//         />
//       </Tab.Navigator> 
// </NavigationContainer>
   
//   )
// }

