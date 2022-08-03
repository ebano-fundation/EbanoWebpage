//firebase utils
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "Api key",
    // original api key apiKey: "AIzaSyCz6Qgrpg6i6B9v1X28J9AwCX3EOaVvlvI",
    authDomain: "ebano-test.firebaseapp.com",
    projectId: "ebano-test",
    storageBucket: "ebano-test.appspot.com",
    messagingSenderId: "499496574285",
    appId: "1:499496574285:web:6b0e5d081a69a25d33eb04",
    measurementId: "G-76Q9ZVMPVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app

    /* console 
     * 
     * firebase login
     * 
     * firebase init
     * 
     * firebase deploy
     * */