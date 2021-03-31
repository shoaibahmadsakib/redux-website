import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 var Config = {
    apiKey: "AIzaSyDqznm5wSi5uZWwJJtFHSmoYliGPvLn3Hk",
    authDomain: "estore-4a417.firebaseapp.com",
    projectId: "estore-4a417",
    storageBucket: "estore-4a417.appspot.com",
    messagingSenderId: "6835715799",
    appId: "1:6835715799:web:e2a5257e6967adb949ba92",
    measurementId: "G-CJCB3QRXCT"
  };

  firebase.initializeApp(Config);

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account' });

  export const SignInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;
