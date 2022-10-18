import { collection, addDoc, getDocs, getDoc, doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { uid } from "./auth";


// Adds a user to the db
let userId
export const addUser = async function addUser() {
    try {
        let result;
        await checkUsers().then(res => {
            result = res;
        })
        if (result.match !== true) {
            const docRef = await addDoc(collection(db, "users"), {
                uid: uid,
                authToken: '',
                userName: '',
                email: ''
            });
            userId = docRef.id
            console.log("Document written with ID: ", docRef.id);
        } else {
            userId = result.docId
            console.log("User already exists");
        }
        } catch (e) {
        console.error("Error adding document: ", e);
        }
}



// Updates a user in the db
export const updateUsers = async function updateUsers(token, userName, email) {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
        authToken: token,
        userName: userName,
        email: email
    })
    console.log("User updated!")
}


// Checks if user exists in the db
const checkUsers = async function checkUsers() {
    let match = false;
    let docId = undefined
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(doc => {
        if (uid === doc.data().uid) {
            docId = doc.id
            match = true;
        }
    })
    return { match: match, docId: docId};
}


// Saves a OAuth token to the db
export const saveToken = async function saveToken(token) {
    const tokenRef = collection(db, "tokens")
    try {
        await setDoc(doc(tokenRef, uid), {
            token: token
        })
        console.log(`Token added: ${tokenRef.token}`)
    } catch (e) {
        console.error(`Error adding document: ${e}`)
    }
}


// Gets a OAuth Token from the db
export const getToken = async function getToken() {
    const tokenRef = doc(db, "tokens", uid)
    try{
        const docSnap = await getDoc(tokenRef)

        if (docSnap.exists()) {
            return docSnap.data().token
        } else {
            console.log("Token doesn't exist")
            return false
        }
    } catch(e) {
        console.log("Error caught")
    }
}


// Prints a token to the console (useless)
export const printToken = async function printToken() {
    const token = await getToken()
    console.log(token)
}


// Deletes a token from the db
export const deleteToken = async function deleteToken() {
    const tokenRef = doc(db, "tokens", uid)
    return deleteDoc(tokenRef).then(() => {
        console.log("Token deleted")
    }).catch(e => {
        console.log("Delete error ocurred" + e)
    })
}
