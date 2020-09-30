import config from "../src/config"
import firebase from "firebase/app";
// eslint-disable-next-line 
import database from "firebase/database";

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
