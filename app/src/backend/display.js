import { getRepos, getFiles, getSingleFile } from './api';

let firstClick = false;
export const fillThePocket = async function fillThePocket () {
  if (firstClick === false) {
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
    const fboxTag = document.getElementById('fileBox');

    repoTag.innerHTML = `${repos[0]}`;

    for (let i = 0; i < files.length; i++) {
      const opt = document.createElement('option');
      opt.text = files[i];
      opt.addEventListener('click', () => {
        // console.log(opt.text)
        displayFile(repos[0], files[i]).then(res => [
          fboxTag.innerHTML = res
        ]);
      });

      fileTag.appendChild(opt);
    }
    // repoTag.appendChild(opt1)
  }
};

export const displayFile = async function displayFile (repo, fileName) {
  let file;
  await getSingleFile(repo, fileName).then(res => {
    file = res;
  });
  const data = file.content;
  console.log(data);
  const buff = atob(data);
  const text = buff.toString('ascii');

  return text;
};
