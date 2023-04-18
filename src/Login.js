import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login() {
  //   const [pwd, setPwd] = useState(<ion-icon name="eye-off-outline"></ion-icon>);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <ImageBackground
        source={require('./Images/Vimm-bg.jpg')}
        style={styles.bgImage}>
        {/* top login view include username password and login button  */}
        <View
          style={{justifyContent: 'center', alignItems: 'center', flex: 0.7}}>
          {/* username textfield */}

          {/* <TextInput
            placeholder="Username"
            style={styles.usernameInput}
            placeholderTextColor={'white'}
          /> */}

          <TextInput
            label="Username"
            style={styles.usernameInput}
            // color={"white"}
          />

          {/* password textfield */}

          {/* <TextInput placeholder='password' placeholderTextColor={"white"}  style={styles.usernameInput} /> */}

          <TextInput
            label="Password"
            secureTextEntry
            // right={<ion-icon name="eye-outline"></ion-icon>}
            right={() => (
              <Icon name="eye-outline" size={16} color="white"></Icon>
            )}
            style={styles.usernameInput}
            
          />

          {/* login button */}
          <View style={styles.btn}>
            <TouchableOpacity>
              <Text style={styles.btnLabel}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* logo of app */}
        <View
          style={{justifyContent: 'center', alignItems: 'center', flex: 0.3}}>
          <Text style={{color: 'white', fontSize: 78}}>VIMM</Text>
          <Text style={{color: 'white'}}>Video Inventory Mobile Manager</Text>
          <Text style={{color: 'white', marginTop: 15}}>Version -5.00</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    // height:"100%"
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  usernameInput: {
    borderWidth: 2,
    borderColor: 'white',
    width: '90%',
    marginTop: 30,
    backgroundColor: '#000000',
    color: 'white',
  },
  btn: {
    height: 40,
    width: Dimensions.get('window').width * 0.5,
    backgroundColor: '#ccccb3',
    // display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 12,
    // flex:0.2,
    // backgroundColor:'red'
  },
  btnLabel: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
