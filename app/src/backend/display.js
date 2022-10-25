import { getRepos, getFiles, getSingleFile } from './api';
import { htmlScreening, securityClearence } from './screening'
import $ from 'jquery'


let firstClick = false;

// Grabs valid repo and all valid files to display
export const fillThePocket = async function fillThePocket () {
  if (firstClick === false) {
    alert("Filling pocket!")
    firstClick = true;
    const repos = await getRepos();
    const files = await getFiles(repos[0]);

    console.log('Filling with the pocket...');
    const repoTag = document.getElementById('repo');
    const fileTag = document.getElementById('file');

    repoTag.innerHTML = `${repos[0]}`;

    for (let i = 0; i < files.length; i++) {
      const opt = document.createElement('option');
      opt.text = files[i];
      fileTag.appendChild(opt);
    }
  } else {
    alert("Pocket Full!")
  }
};

// Gets the contents of a file and turns them into ascii string
export const getFileContent = async function getFileContent (repo, fileName) {
  let file;
  await getSingleFile(repo, fileName).then(res => {
    file = res;
  });
  const data = file.content;
  const buff = atob(data);
  const content = buff.toString('ascii');

  return content;
};

// Displays the contents of the file on the filebox
export const displayFile = async function displayFile() {
  const repos = await getRepos();
  const pre = document.createElement('pre');
  const fdisplayTag = document.getElementById('fileDisplay')
  let fileName = $('option:selected', this).text()
  clearFileBox()
  clearOutputBox()
  getFileContent(repos[0], fileName).then(res => {
    pre.innerHTML = res
    fdisplayTag.appendChild(pre)
  })
}

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
    fileContent = htmlScreening(fileContent)

    console.oldLog = console.log

    console.log = function (value) {
        console.oldLog(value)
        outputTag.innerHTML += value + "<br>"
    }

    let match = await securityClearence();
    if (match === true) {
      eval(fileContent);
    } else {
      alert("Unauthorized to run code");
    }
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
