// HANDLES AUTHENTICATION //

import { auth, db } from "../firebase.js"
import { GithubAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from 'firebase/auth'


const provider = new GithubAuthProvider()

// handles log in with Github
export const logIn = function logIn() {
    signInWithRedirect(auth, provider).then(() => {
      console.log("Sign in succesful!")
    }).catch((err) => {
      console.log("Sign in error occurred")
      console.log(err)
    })
}

// handles log out
export const logOut = function logOut() {
  signOut(auth).then(() => {
    console.log("Sign out succesful!")
  }).catch((err) => {
    console.log("Sign out error occurred")
    console.log(err)
  })
}

// gets results of log in
getRedirectResult(auth)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    if (credential) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = credential.accessToken;
      console.log(token)
    }

    // The signed-in user info.
    const user = result.user;
    console.log(user.email)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });


// Verifies if a user is logged in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid
    console.log(`User logged in: ${uid}`)
  } else {
    console.log("User logged out")
  }
})