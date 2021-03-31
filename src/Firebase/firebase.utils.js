import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDqznm5wSi5uZWwJJtFHSmoYliGPvLn3Hk",
  authDomain: "estore-4a417.firebaseapp.com",
  projectId: "estore-4a417",
  storageBucket: "estore-4a417.appspot.com",
  messagingSenderId: "6835715799",
  appId: "1:6835715799:web:e2a5257e6967adb949ba92",
  measurementId: "G-CJCB3QRXCT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;