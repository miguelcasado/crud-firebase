// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4FMNHUpYA142zzdWdFoAJauma7-bGDko',
  authDomain: 'crud-react-6669c.firebaseapp.com',
  projectId: 'crud-react-6669c',
  storageBucket: 'crud-react-6669c.appspot.com',
  messagingSenderId: '189363281552',
  appId: '1:189363281552:web:9c317be78a57f2e3b74215',
  measurementId: 'G-63370HELQ0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
