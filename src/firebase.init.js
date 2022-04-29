// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3OiqfWtVErNeYM_1mud_UZi39wTQ7Pg0",
    authDomain: "uni-store-house.firebaseapp.com",
    projectId: "uni-store-house",
    storageBucket: "uni-store-house.appspot.com",
    messagingSenderId: "947198321538",
    appId: "1:947198321538:web:b0bb68832c6b90f198a59b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;