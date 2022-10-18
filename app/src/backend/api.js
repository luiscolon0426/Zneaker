import axios from "axios";
import { getToken, userInfo } from "./db";

let data = '';


// Gets users github info (username)
export const getGithubInfo = async function getGithubInfo() {
    const token = await getToken()
    let userName
    let config = {
        method: 'get',
        url: 'https://api.github.com/user',
        headers: { 
          'Accept': 'application/json', 
          'Authorization': `Bearer ${token}`
        },
        data : data
      };
      
      return axios(config)
      .then(function (response) {
        userName = response.data.login;
        return userName
      })
      .catch(function (error) {
        console.log(error);
      });
}

// Gets a list of valid repos
export const getRepos = async function getRepos() {
    let user;
    await userInfo().then(res => {
      user = res
    })
    let config = {
    method: 'get',
    url: `https://api.github.com/users/${user.userName}/repos`,
    headers: { 
      'Accept': 'application/json', 
      'Authorization': `Bearer ${user.authToken}`
    },
    data : data
  };

  return axios(config)
  .then(function (response) {
    let repoList = []
    response.data.forEach(repo => {
      repoList.push(repo.name)
    })
    let validRepo = repoList.filter(repo => { return repo.includes('.codepocket') })
    return validRepo;
  })
  .catch(function (error) {
    console.log(error);
  });
}

// Gets a list of all files inside valid repo
export const getFiles = async function getFiles() {
  let user
  await userInfo().then(res => {
    user = res
  })
  let config = {
    method: 'get',
    url: `https://api.github.com/repos/${user.userName}/test.codepocket/contents/`,
    headers: { 
      'Accept': 'application/json', 
      'Authorization': `Bearer ${user.authToken}` 
    },
    data : data
  };
  
  return axios(config)
  .then(function (response) {
    let fileList = []
    response.data.forEach(file => {
      fileList.push(file.path)
    })
    let validFiles = fileList.filter(file => { return file.includes('.js') })
    return validFiles;
  })
  .catch(function (error) {
    console.log(error);
  });
  
}




// export const printRepoList = async function printRepoList() {
//   const repoList = await getFiles()
//   console.log(repoList)
// }