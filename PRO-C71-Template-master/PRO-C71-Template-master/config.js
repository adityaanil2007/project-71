import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAU9kH89IFn-Uh2KB0kbeXR84wsfxzy63I",
    authDomain: "e-ride-stage-4-63cb6.firebaseapp.com",
    projectId: "e-ride-stage-4-63cb6",
    storageBucket: "e-ride-stage-4-63cb6.appspot.com",
    messagingSenderId: "83613329023",
    appId: "1:83613329023:web:215a89f94920d6dbf2414a"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
