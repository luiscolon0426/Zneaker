// HANDLES AUTHENTICATION //

import { auth } from "../firebase.js"
import { GithubAuthProvider, signInWithRedirect, onAuthStateChanged, getRedirectResult, signOut } from 'firebase/auth'
import { addUser, saveToken, deleteToken } from "./db.js"

const provider = new GithubAuthProvider()

// handles log in with Github
export const logIn = function logIn() {
    signInWithRedirect(auth, provider).catch((err) => {
      console.log("Sign in error occurred");
      console.log(err);
    })
};

// handles log out
export const logOut = async function logOut() {
  await deleteToken()
  // window.location.href = '/home'
  signOut(auth).then(() => {}).catch((err) => {
    console.log("Sign out error occurred")
    console.log(err)
  })
}

export let uid;
// Verifies if a user is logged in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
  uid = user.uid
  console.log("User logged in")
  addUser()
  // if (window.location.href.indexOf('/home') > -1) {
  //   window.location.href = '/app'
  // }
  } else {
    uid = 'False'
    if (window.location.href.indexOf('/app') > -1) {
      window.location.href = '/'
    }
  }
});

// Gets redirect results of log in
getRedirectResult(auth).then(res => {
  try{
    const credential = GithubAuthProvider.credentialFromResult(res)
    const token = credential.accessToken
    saveToken(token)
  } catch (e) {
    console.log("Error caught")
  }
})
