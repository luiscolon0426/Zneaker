import { collection, addDoc, getDocs, getDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { uid } from "./auth";

export const addUser = async function addUser() {
    try {
        let match;
        await checkUsers().then(result => {
            match = result;
        })
        if (match !== true) {
            const docRef = addDoc(collection(db, "users"), {
                uid: uid,
                authToken: '',
                userName: '',
                email: ''
            });
            console.log("Document written with ID: ", docRef.uid);
        } else {
            console.log("User already exists");
        }
        } catch (e) {
        console.error("Error adding document: ", e);
        }
}

const checkUsers = async function checkUsers() {
    let match = false;
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(doc => {
        if (uid === doc.data().uid) {
            match = true;
        }
    })
    return match;
}

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

export const getToken = async function getToken() {
    const docRef = doc(db, "tokens", uid)
    try{
        const docSnap = await getDoc(docRef)

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

export const printToken = async function printToken() {
    const token = await getToken()
    console.log(token)
}

export const deleteToken = async function deleteToken() {
    const docRef = doc(db, "tokens", uid)
    return deleteDoc(docRef).then(() => {
        console.log("Token deleted")
    }).catch(e => {
        console.log("Delete error ocurred" + e)
    })
}
