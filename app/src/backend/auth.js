import { auth, db } from "../firebase.js"
import { GithubAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth'

const provider = new GithubAuthProvider()

export const signIn = function signIn() {
    signInWithRedirect(auth, provider)
}

export const Hello = function hello() {
    console.log("hello")
}

// export const redirectResult = getRedirectResult(auth)
// .then((result) => {
//     const credential = GithubAuthProvider.credentialFromResult(result);
//     if (credential) {
//       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//       const token = credential.accessToken;
//       console.log(token)
//       // ...
//     }

//     // The signed-in user info.
//     const user = result.user;
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GithubAuthProvider.credentialFromError(error);
//     // ...
//   });