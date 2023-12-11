
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  updateDoc
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged
} from 'firebase/auth'



const firebaseConfig = {

  apiKey: "AIzaSyAJdFknk-LVxuCrWhQSeAL2IL9K6oRjxls",

  authDomain: "talaskutuphaneleri.firebaseapp.com",

  projectId: "talaskutuphaneleri",

  storageBucket: "talaskutuphaneleri.appspot.com",

  messagingSenderId: "5706359894",

  appId: "1:5706359894:web:53baec19e25ea78fa347f7",

  measurementId: "G-060NS2LC82"

}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
// const auth = getAuth()



const akademikKisimRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/akademikKisim/kapasite');
const sesliBolumRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/sesliBolum/kapasite');
const sessizBolumRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/sessizBolum/kapasite');



// Log a message when the document is successfully retrieved
console.log('Before calling sesliBolumRef.get()');
sesliBolumRef.get().then((doc) => {
  if (doc.exists) {
    const kapasite = doc.data().kapasite || 0;
    console.log('Successfully connected to Firebase. Initial capacity:', kapasite);
  } else {
    console.log('Document does not exist.');
  }
}).catch((error) => {
  console.error('Error connecting to Firebase:', error);
});
console.log('After calling sesliBolumRef.get()');

const plus1 = document.querySelector(".button1");
const minus1 = document.querySelector(".button2");
const plus2 = document.querySelector(".button3");
const minus2 = document.querySelector(".button4");
const plus3 = document.querySelector(".button5");
const minus3 = document.querySelector(".button6");

plus1.addEventListener('click', () => {
  arttir(sesliBolumRef);
});

minus1.addEventListener('click', () => {
  azalt(sesliBolumRef);
});

function arttir(ref) {
  ref.update({
    kapasite: firebase.firestore.FieldValue.increment(1),
  });
}

function azalt(ref) {
  ref.get().then((doc) => {
    if (doc.exists) {
      const kapasite = doc.data().kapasite || 0;
      if (kapasite > 0) {
        ref.update({
          kapasite: firebase.firestore.FieldValue.increment(-1),
        });
      }
    }
  });
}













