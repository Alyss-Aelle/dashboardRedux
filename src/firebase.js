 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 import {getStorage} from 'firebase/storage'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBp_jkfjxxND-u4XKbWuW0XXeq_F9hXV_c",
   authDomain: "dashboard-b461d.firebaseapp.com",
   projectId: "dashboard-b461d",
   storageBucket: "dashboard-b461d.appspot.com",
   messagingSenderId: "650038919626",
   appId: "1:650038919626:web:293dbdcd588699b1cc8f33"
 };
 
  const app = initializeApp(firebaseConfig);
  // Export firestore database
  // It will be imported into your react app whenever it is needed
  export const dbFirestore = getFirestore(app);
 
  //initialize firestorage
  export const storage = getStorage(app);
  export default app;