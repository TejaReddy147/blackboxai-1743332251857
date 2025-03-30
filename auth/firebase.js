// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyDontUseInProduction",
  authDomain: "edtech-demo.firebaseapp.com",
  projectId: "edtech-demo",
  storageBucket: "edtech-demo.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123def456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();