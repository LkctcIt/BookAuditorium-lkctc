// firebase.js
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBNNx0F5m_GwxIfREUYymeSBrUO_XdCG9U",
    authDomain: "bookauditorium-3ed57.firebaseapp.com",
    projectId: "bookauditorium-3ed57",
    storageBucket: "bookauditorium-3ed57.appspot.com",
    messagingSenderId: "31695704175",
    appId: "1:31695704175:web:88b12a5e668be316f37d9a",
}

const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db, storage }
