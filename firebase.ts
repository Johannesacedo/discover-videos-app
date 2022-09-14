// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTltGJuBmCAUiOM0rSS4AHQMsBfxL_EN4",
    authDomain: "netflix-clone-app-2eb73.firebaseapp.com",
    projectId: "netflix-clone-app-2eb73",
    storageBucket: "netflix-clone-app-2eb73.appspot.com",
    messagingSenderId: "267116550391",
    appId: "1:267116550391:web:b1cd85e7a00eddd8241bf2"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }