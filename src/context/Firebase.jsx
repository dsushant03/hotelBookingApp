import { createContext, useContext, useState, useEffect } from "react";
import {initializeApp} from 'firebase/app'
import {getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged} from 'firebase/auth'
import {getFirestore, collection, addDoc, getDocs, where, query} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBOyuwEWqnPXwl2X7yxbiXc-yw8psdbTbk",
    authDomain: "hotelbooking-4f8c5.firebaseapp.com",
    projectId: "hotelbooking-4f8c5",
    storageBucket: "hotelbooking-4f8c5.appspot.com",
    messagingSenderId: "1038848292217",
    appId: "1:1038848292217:web:179c604f7cbafbdd352ba8",
    measurementId: "G-FQV4YL22R8"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const FirebaseContext = createContext(null);

export const useFirebase = ()=> useContext(FirebaseContext);

export const FirebaseProvider = (props) =>{

    const [user, setUser] = useState(null);
  
    useEffect(()=>{
    //   signOut(firebaseAuth)
      onAuthStateChanged(firebaseAuth, (user)=>{
  
        setUser(user)
        console.log(user)
      })
    }, [])

    const signupUtil =  (email, password) =>{
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const loginUtil = (email, password) =>{
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }  

    const signoutUtil = (firebaseAuth) =>{
        return signOut(firebaseAuth);
    }

    const getBookings = async()=>{
        let bookings = [];
        const collectionRef = collection(firestore, "bookings");
        const q = query(collectionRef, where("userID", "==", user.uid));
        return await getDocs(q);
    }
    
    const createNewBooking = async (hotel, guests, checkin, checkout)=>{
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const checkinDate = `${months[checkin.getMonth()]} ${checkin.getDate()}, ${checkin.getFullYear()}`

        const checkoutDate = `${months[checkout.getMonth()]} ${checkout.getDate()}, ${checkout.getFullYear()}`

        return await addDoc(collection(firestore, 'bookings'),{
            hotel,
            guests,
            checkinDate,
            checkoutDate,
            "userID" : user.uid
        });
    }
    
    return (
        <FirebaseContext.Provider value={{signupUtil, loginUtil, createNewBooking, firebaseAuth, signoutUtil, user, getBookings}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}