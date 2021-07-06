import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={

    apiKey: "AIzaSyAAzqgLf8ITbHmvu_KQWgwAK0sG3FdSS3E",
    authDomain: "crwn-db-ef584.firebaseapp.com",
    projectId: "crwn-db-ef584",
    storageBucket: "crwn-db-ef584.appspot.com",
    messagingSenderId: "844489115803",
    appId: "1:844489115803:web:8f88161d81cc3b6b7f1e3e",
    measurementId: "G-BNFQC2QY89"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


