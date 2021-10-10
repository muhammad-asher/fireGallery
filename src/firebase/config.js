// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDCOyEA9lZUIia5QEFs-wele73ffLpdONs",
	authDomain: "asher-firegallery.firebaseapp.com",
	projectId: "asher-firegallery",
	storageBucket: "asher-firegallery.appspot.com",
	messagingSenderId: "909783864953",
	appId: "1:909783864953:web:400485ecd2bb29ae12a6a8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
