import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyA9RnpLdp7-4r2ylR1jkNVuyFOpo3AlPLo',
  authDomain: 'chat-web-app-4b366.firebaseapp.com',
  projectId: 'chat-web-app-4b366',
  storageBucket: 'chat-web-app-4b366.appspot.com',
  messagingSenderId: '65180026703',
  appId: '1:65180026703:web:02db0cc863c11e086b673a',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
