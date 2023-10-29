import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNxqy3CE9g8tat1HIjqRy_GLYqyUZp43g",
  authDomain: "art-market-auth.firebaseapp.com",
  projectId: "art-market-auth",
  storageBucket: "art-market-auth.appspot.com",
  messagingSenderId: "184366106845",
  appId: "1:184366106845:web:3b6dd58d8ccf005c66f334",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
