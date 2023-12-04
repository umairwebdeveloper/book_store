// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCfL1Nn5IxE4fD7znjzgBbu4PjOeuzzZjw",
	authDomain: "ecommerce-boks.firebaseapp.com",
	projectId: "ecommerce-boks",
	storageBucket: "ecommerce-boks.appspot.com",
	messagingSenderId: "1002697723081",
	appId: "1:1002697723081:web:262093fe8974094222d118",
	measurementId: "G-DGHE7TZXQF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}