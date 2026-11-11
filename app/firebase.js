import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

// A configuração web do Firebase identifica o projeto; a proteção dos dados
// depende também das regras do Firebase Authentication e do banco de dados.
const firebaseConfig = {
    apiKey: "AIzaSyC4RaEOO6Em0g7sVcNH9ARuoN37W2nQD3I",
    authDomain: "lumie-a62af.firebaseapp.com",
    projectId: "lumie-a62af",
    storageBucket: "lumie-a62af.firebasestorage.app",
    messagingSenderId: "498699086050",
    appId: "1:498699086050:web:2f394714676f0ec92316bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
};
