// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxHHuFLVPdAUvrMEgmQ8Di-7hF2M8rWrU",
    authDomain: "thechildcaremanagement-fd340.firebaseapp.com",
    projectId: "thechildcaremanagement-fd340",
    storageBucket: "thechildcaremanagement-fd340.appspot.com",
    messagingSenderId: "1015127424990",
    appId: "1:1015127424990:web:0a7e407a8eeaff7270e74f",
    measurementId: "G-JLT94S968H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);