import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('3DSJ84bVfbfaOKd1jY3h').collection('cartItems').doc('trF6qnEDQa6DuftRo42q');
firestore.doc('/users/3DSJ84bVfbfaOKd1jY3h/trF6qnEDQa6DuftRo42q');
firestore.collection('/users/3DSJ84bVfbfaOKd1jY3h/cartItems');