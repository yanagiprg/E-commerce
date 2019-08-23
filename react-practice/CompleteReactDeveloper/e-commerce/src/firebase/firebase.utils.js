import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDs2ATMBWJORZVUByAbbubJCQMRTwoezxc",
  authDomain: "crwn-db-aa930.firebaseapp.com",
  databaseURL: "https://crwn-db-aa930.firebaseio.com",
  projectId: "crwn-db-aa930",
  storageBucket: "",
  messagingSenderId: "321797870079",
  appId: "1:321797870079:web:25a5a17f51401010"
};

export const createUserProfileDocument = async (userAuth, additionalData,) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;