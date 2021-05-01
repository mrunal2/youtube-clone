import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyCiebVNbfGOw11HmD1Hj9tHeTJMtAEUSTg",
   authDomain: "clone-303215.firebaseapp.com",
   projectId: "youtube-clone-303215",
   storageBucket: "youtube-clone-303215.appspot.com",
   messagingSenderId: "168422927361",
   appId: "1:168422927361:web:b5bf0738d89d3aeebfe400"
 };
firebase.initializeApp(firebaseConfig)

export default firebase.auth()
