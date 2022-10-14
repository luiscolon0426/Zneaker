// HANDLES AUTHENTICATION //

import { auth } from "../firebase.js"
import { GithubAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from 'firebase/auth'


const provider = new GithubAuthProvider()


// handles log in with Github
export const logIn = function logIn() {
    signInWithRedirect(auth, provider).then(() => {
      // console.log(window.location.href)
    }).catch((err) => {
      console.log("Sign in error occurred")
      console.log(err)
    })
}

// handles log out
export const logOut = function logOut() {
  signOut(auth).then(() => {
  }).catch((err) => {
    console.log("Sign out error occurred")
    console.log(err)
  })
}

export let uid;
// Verifies if a user is logged in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
  uid = user.uid
  if (window.location.href.indexOf('/app') === -1) {
    window.location.href = '/app'
  }
  } else {
    uid = 'False'
    if (window.location.href.indexOf('/home') === -1) {
      window.location.href = '/home'
    }
  }
  console.log(uid)
});
