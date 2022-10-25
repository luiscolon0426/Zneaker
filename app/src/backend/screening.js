import { uid } from "./auth"

// Allows only authorized users to access the apps functionality
export const securityClearence = async function securityClearence() {
    const authorizedIds = [
        "djYi4ZLzzkQpcMa28h7CKpaOJEa2",
        "yzg4qeZbkvcULl9sBxRVnpQXt8g1",
        "0ntfA5XkLlZnjzSf4aRdtA9Rqi02"
    ]

    let match = false
    authorizedIds.forEach(id => {
        if (uid === id) {
            match = true
            // console.log("Authorized id")
        }
    })
    // if (match === false) {
    //     console.log("Unauthorized id")
    // }

    return match
}


// Converts special HTML characters for javascript processing
export const htmlScreening = function htmlScreening(fileContent) {
    let entities = [
        "&lt;",
        "&gt;",
        "&amp;",
        "&quot;",
        "&apos;"
    ]

    let results = [
        "<",
        ">",
        "&",
        "\"",
        "'"
    ]

    let newFileContent
    let symbol
    entities.forEach((entity, index) => {
        symbol = entity.replace(/['"]+/g, '');
        let re = new RegExp(symbol, "g")
        if (re.test(fileContent)) {
            if (!newFileContent) {
                newFileContent = fileContent.replace(re, results[index])
            } else {
                newFileContent = newFileContent.replace(re, results[index])
            }
        }
    })
    if (newFileContent) {
        return newFileContent
    } else {
        return fileContent
    }
}

// export const loggingUserIn = function loggingUserIn() {
//     var el = document.createElement("div");
//     el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");
//     el.innerHTML = "Logging in...";
//     setTimeout(function(){
//      el.parentNode.removeChild(el);
//     }, 3000);
//     document.body.appendChild(el);
// }