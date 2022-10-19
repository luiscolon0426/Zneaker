import { doc } from "firebase/firestore";
import { getRepos, getFiles } from "./api";

let firstClick = false
export const fillThePocket = async function fillThePocket() {
    if (firstClick === false) {
        firstClick = true
        const repos = await getRepos()
        const files =  await getFiles(repos[0])

        // let fileObj = {}
        // for (let i = 0; i < repos.length; i++) {
        //     let files = await getFiles(repos[i])
        //     fileObj[repos[i]] = files
        // }
        // let repo_file_List = [repos, fileObj]
    
        console.log("Filling with the pocket...")
        let repoTag = document.getElementById('repo')
        let fileTag = document.getElementById('file')
    
        repoTag.innerHTML = `${repos[0]}`

        for (let i = 0; i < files.length; i++) {
            let opt = document.createElement('option')
            opt.text = files[i]
            opt.addEventListener("click", () => {
                console.log(opt.text)
            })

            fileTag.appendChild(opt)
        }
        // repoTag.appendChild(opt1)
    }
}
