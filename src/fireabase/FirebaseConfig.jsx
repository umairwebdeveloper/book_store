// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyADBS0ifTI7NBH_CjEWQCgKZMU_hkb3QHo",
	authDomain: "onlinebooks-store.firebaseapp.com",
	projectId: "onlinebooks-store",
	storageBucket: "onlinebooks-store.appspot.com",
	messagingSenderId: "365981183481",
	appId: "1:365981183481:web:5afd320fdf9653f76e2128",
	measurementId: "G-YE1PK7PJ1R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}