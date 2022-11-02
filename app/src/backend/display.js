import { getRepos, getFiles, getSingleFile } from './api';
import { htmlScreening, securityClearence } from './screening';
import $ from 'jquery';

let firstClick = false;

// Grabs valid repo and all valid files to display
export const fillThePocket = async function fillThePocket () {
  if (firstClick === false) {
    alert('Filling pocket!');
    firstClick = true;
    const repos = await getRepos();
    const files = await getFiles(repos[0]);

    console.log('Filling with the pocket...');
    const repoTag = document.getElementById('repo');
    const fileTag = document.getElementById('file');

    // Replaces "No Repo" tag with the name of the valid ".pocket" repo
    repoTag.innerHTML = `${repos[0]}`;

    // Creates list of <opt> tags with the valid ".js" files inside the repo
    for (let i = 0; i < files.length; i++) {
      const opt = document.createElement('option');
      opt.text = files[i];
      fileTag.appendChild(opt);
    }
  } else {
    alert('Pocket Full!');
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
export const displayFile = async function displayFile () {
  const repos = await getRepos();
  const pre = document.createElement('pre');
  const fdisplayTag = document.getElementById('fileDisplay');

  const fileName = $('option:selected', this).text();
  clearFileBox();
  clearOutputBox();

  // Displays the file content of the selected <opt> tag file name
  getFileContent(repos[0], fileName).then(res => {
    pre.innerHTML = res;
    fdisplayTag.appendChild(pre);
  });
};

// Reads text inside filebox
export const readFileDisplay = function readFileDisplay () {
  const fileTag = document.getElementById('fileDisplay');
  const fileContent = fileTag.firstChild.textContent;
  return fileContent;
};

// Display the output on the outputbox
export const displayOutput = async function displayOutput () {
  clearOutputBox();

  // Resets "console.log" functionality to its original function
  if (console.oldLog) {
    console.log = console.oldLog;
  }
  const outputTag = document.getElementById('outputDisplay');
  const text = readFileDisplay();
  let fileContent = text;
  fileContent = htmlScreening(fileContent);

  console.oldLog = console.log;

  // Overwrites "console.log" functionality to display output on output box instead
  console.log = function (value) {
    // console.oldLog(value)
    outputTag.innerHTML += value + '<br>';
  };

  const match = await securityClearence();
  if (match === true) {
    eval(fileContent);
  } else {
    alert('Unauthorized to run code');
  }
};

// Clears the text in the output box
export const clearOutputBox = function clearOutputBox () {
  const outputTag = document.getElementById('outputDisplay');

  if (outputTag.hasChildNodes) {
    while (outputTag.firstChild) {
      outputTag.removeChild(outputTag.firstChild);
    }
  }
};

// Clears the text in the file box
export const clearFileBox = function clearFileBox () {
  const fileTag = document.getElementById('fileDisplay');

  if (fileTag.hasChildNodes) {
    while (fileTag.firstChild) {
      fileTag.removeChild(fileTag.firstChild);
    }
  }
};
