import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
    getAuth, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged  
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'



const firebaseConfig = {
    apiKey: "AIzaSyBVdHz4x6PwNhEDiXgk05bi_Ljr9vvcx_Q",
    authDomain: "apiweb2024uwu.firebaseapp.com",
    projectId: "apiweb2024uwu",
    storageBucket: "apiweb2024uwu.appspot.com",
    messagingSenderId: "294780351250",
    appId: "1:294780351250:web:3705dd81ba03b460ee79cb",
    measurementId: "G-5EE7FS2M73"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//metodo de autenticacion de usuario
export const loginauth=(email,password)=>
    signInWithEmailAndPassword(auth, email, password)

//cerrar sesion del usuario
export const loginout=()=>
  signOut(auth)

//estado del usuario logeado
export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href='../index.html'
    }
  });
}