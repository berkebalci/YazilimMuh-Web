
function validate(){

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var username_error = document.getElementById('username-error');
  var password_error = document.getElementById('password-error');


//validation for the inputs
if(username ==''){
  username_error.style.display = "block";
  username.focus();
  return false;
}
if(password ==''){
  password_error.style.display = "block";
  password.focus();
  return false;
}

//redirecting to another page

if(username=="kullanıcı"&&password=="sifre"){
  
  location.href="control.html";
  return false;
}
else{
  alert("Giriş başarısız")
}

}

const show=()=>{
  let password=document.getElementById("password");
  let visibility=document.querySelector(".visibility");
  if(password.type=== "password"){
      password.type="text";
      visibility.style.color="rgb(98,98,98)"
  }
  else{
      password.type="password";
      visibility.style.color="#F9F6F4"
  }
}

/*
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




// collection sesliBolumRef
const colsesliBolumRef = collection(db, 'kutuphaneler')
const akademikKisimsesliBolumRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/akademikKisim', 'kapasite');
const sesliBolumsesliBolumRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/sesliBolum', 'kapasite');
const sessizBolumsesliBolumRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/sessizBolum', 'kapasite');

const button5 = document.querySelector("#akademikAlanArtirButton");
const button6 = document.querySelector("#akademikAlanAzaltButton");

const button1 = document.querySelector("#sesliBolumArtirButton");
const button2 = document.querySelector("#sesliBolumAzaltButton");

const button3 = document.querySelector("#sessizBolumArtirButton");
const button4 = document.querySelector("#sessizBolumAzaltButton");



*/
/*
// queries
const q = query(colsesliBolumRef, where("author", "==", "patrick rothfuss"), orderBy('createdAt'))
*/

/*
// realtime collection data
const unsubCol = onSnapshot(q, (snapshot) => {
  let kutuphaneler = []
  snapshot.docs.forEach(doc => {
    kutuphaneler.push({ ...doc.data(), kapasite: doc.kapasite })
  })
  console.log(kutuphaneler)
})
*/
/*
// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colsesliBolumRef, {
    kapasite: addBookForm.kapasite.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    addBookForm.reset()
  })
})
*/
/*
// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docsesliBolumRef = doc(db, 'kutuphaneler', deleteBookForm.id.value)

  deleteDoc(docsesliBolumRef)
    .then(() => {
      deleteBookForm.reset()
    })
})
*/

/*
// fetching a single document (& realtime)
const docsesliBolumRef = doc(db, 'kutuphaneler', 'gGu4P9x0ZHK9SspA1d9j')
*/
/*
const unsubDoc = onSnapshot(docsesliBolumRef, (doc) => {
  console.log(doc.data(), doc.id)
})
*/
/*
// updating a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let sesliBolumsesliBolumRef = doc(db, 'kutuphaneler', updateForm.kapasite.value)

  updateDoc(sesliBolumsesliBolumRef, {
    kapasite: 'updated kapasite'
  })
  .then(() => {
    updateForm.reset()
  })
})


function arttir(sesliBolumRef) {
  sesliBolumRef.once('value', (snapshot) => {
    const dolulukOrani = snapshot.val() || 0;
    sesliBolumRef.set(dolulukOrani + 1);
  });
}

// Azaltma işlevi
function azalt(sesliBolumRef) {
  sesliBolumRef.once('value', (snapshot) => {
    const dolulukOrani = snapshot.val() || 0;
    if (dolulukOrani > 0) {
      sesliBolumRef.set(dolulukOrani - 1);
    }
  });
}
*/
/*
// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})

// logging in and out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})
*/
/*
// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})

// unsubscribing from changes (auth & db)
const unsubButton = document.querySelector('.unsub')
unsubButton.addEventListener('click', () => {
  console.log('unsubscribing')
  unsubCol()
  unsubDoc()
  unsubAuth()
})
*/




/*
// sesliBolumReferanslar
const akademikKisimsesliBolumRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/akademikKisim', 'kapasite');
const sesliBolumsesliBolumRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/sesliBolum', 'kapasite');
const sessizBolumsesliBolumRef = doc(db, 'kutuphaneler/talasKutuphanesi/bolumler/sessizBolum', 'kapasite');


// İlgili butonlar ve etkinlik dinleyicileri
const button5 = document.querySelector("#akademikAlanArtirButton");
const button6 = document.querySelector("#akademikAlanAzaltButton");

const button1 = document.querySelector("#sesliBolumArtirButton");
const button2 = document.querySelector("#sesliBolumAzaltButton");

const button3 = document.querySelector("#sessizBolumArtirButton");
const button4 = document.querySelector("#sessizBolumAzaltButton");


*/












