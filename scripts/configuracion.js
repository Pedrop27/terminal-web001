const config = {
  apiKey: "AIzaSyD7KUWvVTPAEXQGX8AV97NsuquyIHeq6iM",
  authDomain: "terminal-web001.firebaseapp.com",
  projectId: "terminal-web001",
  storageBucket: "terminal-web001.appspot.com",
  messagingSenderId: "1062934742184",
  appId: "1:1062934742184:web:d4be6bfa15e1a137706e9d",
  measurementId: "G-QHBD62ZVJS"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
timestampsInSnapshots: true,
};
firestore.settings(settings);

export default firebase;

export {
firestore,
};