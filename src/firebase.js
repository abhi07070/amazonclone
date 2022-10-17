// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJVKg1RN9tVWoDZK6IU03stNVZtggP7hg",
    authDomain: "clone-c86b0.firebaseapp.com",
    projectId: "clone-c86b0",
    storageBucket: "clone-c86b0.appspot.com",
    messagingSenderId: "477662969087",
    appId: "1:477662969087:web:614fa1b159dbea9978e0ca",
    measurementId: "G-WQ8F62X3FE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 

// onAuthStateChanged(auth,user=>{
//     if(user!==null){
//         console.log('logged in!');
//     }
//     console.log('no user');
// })


// export { db, auth };