import { collection, addDoc, getDocs, getDoc, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { uid } from './auth';
import { getGithubInfo } from './api';

// Adds a user to the db
let userId;
export const addUser = async function addUser () {
  try {
    let result;
    await checkUsers().then(res => {
      result = res;
    });

    // Creates new user if it doesn't exit in the database
    if (result.match !== true) {
      const docRef = await addDoc(collection(db, 'users'), {
        uid: uid,
        authToken: '',
        userName: ''
      });
      userId = docRef.id;
      console.log('Document written with ID: ', docRef.id);
    } else {
      userId = result.docId;
      console.log('User already exists');
    }
    const userName = await getGithubInfo('login');
    const token = await getToken();
    updateUsers(token, userName);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Updates a user in the db
export const updateUsers = async function updateUsers (token, userName) {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    authToken: token,
    userName: userName
  });
  console.log('User updated!');
};

// Checks if user exists in the db
export const checkUsers = async function checkUsers () {
  let match = false;
  let docId;
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach(doc => {
    if (uid === doc.data().uid) {
      docId = doc.id;
      match = true;
    }
  });
  return { match: match, docId: docId };
};

// Gets info of a single user
export const userInfo = async function userInfo () {
  const userRef = doc(db, 'users', userId);
  try {
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("Token doesn't exist");
      return false;
    }
  } catch (e) {
    console.log('Error caught');
  }
};

// Saves a OAuth token to the db
export const saveToken = async function saveToken (token) {
  const tokenRef = collection(db, 'tokens');
  try {
    await setDoc(doc(tokenRef, uid), {
      token: token
    });
    console.log(`Token added: ${tokenRef.token}`);
  } catch (e) {
    console.error(`Error adding document: ${e}`);
  }
};

// Gets a OAuth Token from the db
export const getToken = async function getToken () {
  const tokenRef = doc(db, 'tokens', uid);
  try {
    const docSnap = await getDoc(tokenRef);

    if (docSnap.exists()) {
      return docSnap.data().token;
    } else {
      console.log("Token doesn't exist");
      return false;
    }
  } catch (e) {
    console.log('Error caught');
  }
};

// Deletes a token from the db
export const deleteToken = async function deleteToken () {
  const tokenRef = doc(db, 'tokens', uid);
  return deleteDoc(tokenRef).then(() => {
    console.log('Token deleted');
  }).catch(e => {
    console.log('Delete error ocurred' + e);
  });
};
