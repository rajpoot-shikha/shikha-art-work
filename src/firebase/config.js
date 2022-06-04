import * as firebase from "firebase/app";
//import firebase from 'firebase/app'

//to store the images
import "firebase/storage";
//database
import "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Yu61L6kOWiRAYb2nElw5jzd-VEsMack",
  authDomain: "shikha-paint-gallery.firebaseapp.com",
  projectId: "shikha-paint-gallery",
  storageBucket: "shikha-paint-gallery.appspot.com",
  messagingSenderId: "775425461962",
  appId: "1:775425461962:web:90e3a077e2ba9ecfc72e33",
};

// Initialize Firebase
//initiating app
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
