import { getRepos, getFiles, getSingleFile } from './api';
import { htmlScreening } from './screening'


let firstClick = false;

// Grabs valid repo and all valid files to display
export const fillThePocket = async function fillThePocket () {
  if (firstClick === false) {
    alert("Filling pocket!")
    firstClick = true;
    const repos = await getRepos();
    const files = await getFiles(repos[0]);

    // let fileObj = {}
    // for (let i = 0; i < repos.length; i++) {
    //     let files = await getFiles(repos[i])
    //     fileObj[repos[i]] = files
    // }
    // let repo_file_List = [repos, fileObj]

    console.log('Filling with the pocket...');
    const repoTag = document.getElementById('repo');
    const fileTag = document.getElementById('file');
    // const fboxTag = document.getElementById('fileBox');
    const fdisplayTag = document.getElementById('fileDisplay')

    repoTag.innerHTML = `${repos[0]}`;

    for (let i = 0; i < files.length; i++) {
      const opt = document.createElement('option');
      const pre = document.createElement('pre');
      opt.text = files[i];
      opt.addEventListener('click', () => {
        clearFileBox()
        clearOutputBox()
        displayFile(repos[0], files[i]).then(res => {
          pre.innerHTML = res
          fdisplayTag.appendChild(pre)
        });
      });

      fileTag.appendChild(opt);
    }
    // repoTag.appendChild(opt1)
  } else {
    alert("Pocket Full!")
  }
};

// Displays content of file into filebox
export const displayFile = async function displayFile (repo, fileName) {
  let file;
  await getSingleFile(repo, fileName).then(res => {
    file = res;
  });
  const data = file.content;
//   console.log(data);
  const buff = atob(data);
  const content = buff.toString('ascii');
  // let text = content.replace(/\n/g, "<br>") 

  return content;
};

// Reads text inside filebox
export const readFileDisplay = function readFileDisplay() {
    const fileTag = document.getElementById('fileDisplay');
    let fileContent = fileTag.firstChild.textContent
    return fileContent
}

// Display the output on the outputbox
export const displayOutput = async function displayOutput() {
    clearOutputBox()
    if (console.oldLog) {
        console.log = console.oldLog
    }
    const outputTag = document.getElementById('outputDisplay')
    let text = readFileDisplay()
    let fileContent = text
    //.replace(/<br>/g, '\n')
    // console.log(fileContent)
    fileContent = htmlScreening(fileContent)
    // console.log(fileContent)

    console.oldLog = console.log

    console.log = function (value) {
        console.oldLog(value)
        // if (!outputTag.hasChildNodes) {
        //     outputTag.innerHTML = value
        // } else {
        //     outputTag.innerHTML += "<br>" + value
        // }
        outputTag.innerHTML += value + "<br>"
    }

    eval(fileContent)
}

// Clears the text in the output box
export const clearOutputBox = function clearOutputBox() {
    const outputTag = document.getElementById('outputDisplay')

    if (outputTag.hasChildNodes) {
        while (outputTag.firstChild) {
            outputTag.removeChild(outputTag.firstChild)
        }
    }
}

// Clears the text in the file box
export const clearFileBox = function clearFileBox() {
  const fileTag = document.getElementById('fileDisplay')

  if (fileTag.hasChildNodes) {
    while (fileTag.firstChild) {
      fileTag.removeChild(fileTag.firstChild)
    }
  }
}
