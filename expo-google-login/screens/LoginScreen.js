import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Google } from 'expo';
import styled from 'styled-components';
import firebase from 'firebase';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

// Provides Google authentication integration for Expo apps,
// using either the native Google Sign In SDK (only in standalone apps)
// or a system web browser (not WebView, so credentials saved on the device can be re-used!).
// https://docs.expo.io/versions/latest/sdk/google/
//
// https://console.developers.google.com/apis/credentials
export default class LoginScreen extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(function() {
              console.log('user signed in');
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email oe the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };

  signInWithGoogleAsync = async () => {
    try {
      console.log('signInWithGoogleAsync');
      const result = await Google.logInAsync({
        androidClientId:
          '612870904464-tjfm3gs90knnrobqrd6j2eaiu6utqkam.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        behavior: 'web',
        scopes: ['profile', 'email']
      });

      console.log('result', result.type);
      if (result.type === 'success') {
        // this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.error(e);
      return { error: true };
    }
  };

  render() {
    return (
      <Container>
        <Button
          title="Sign In With Google"
          onPress={() => this.signInWithGoogleAsync()}
        />
      </Container>
    );
  }
}
