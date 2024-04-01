"use strict";
;
;
let githubUsers = [];
function getUser(userLogin) {
    const userAccount = githubUsers.find(user => user.login === userLogin);
    return userAccount ?? false;
}
;
async function fetchUser(userLogin) {
    const response = await fetch(`https://api.github.com/users/${userLogin}`);
    const user = await response.json();
    if (user.message) {
        console.log(`Not Found, account name: ${userLogin}`);
    }
    else {
        githubUsers.push(user);
        console.log(`
    O usuario:
    Id: ${user.id},
    Login: ${user.login},
    Name: ${user.name}
    Foi salvo com sucesso.
    `);
    }
    ;
}
;
async function showUser(userLogin) {
    const user = getUser(userLogin);
    if (user) {
        const response = await fetch(`https://api.github.com/users/${userLogin}/repos`);
        const allRepos = await response.json();
        const repos = allRepos.slice(0, 3);
        let list = `
        Account Id: ${user.id},
        Account Login: ${user.login},
        Account Name: ${user.name},
        Account Repos: ${user.repos}\n
        Lista dos Repositorios
      `;
        repos.forEach(repo => {
            list += `
          Nome: ${repo.name},
          Descriçao: ${repo.description},
          Fork: ${repo.fork},
          Popularidade: ${repo.stargazers_count}
        `;
        });
        console.log(list);
    }
    else
        console.log(`Not Found, account name: ${userLogin}`);
}
;
function showTotalRepository() {
    const reposTotal = githubUsers.reduce((accumalator, user) => accumalator + user.public_repos, 1);
    console.log(`O total de repositorio salvado ${reposTotal}`);
}
;
function showTopFive() {
    const topFive = githubUsers.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 4);
    let message = 'The Top 5 Most Repositorio Users.\n';
    topFive.forEach((user, index) => {
        message += `User ${user.login} is ${index + 1} in rating.\n`;
    });
    console.log(message);
}
;
// Codigo velho
const saveAccount = (userName) => {
    fetch(`https://api.github.com/users/${userName}`).then((res) => res.json()).then((user) => {
        let userAccount = {
            id: user.id,
            login: user.login,
            name: user.name,
            bio: user.bio,
            public_repos: user.public_repos,
            repos_url: user.repos_url,
            repos: []
        };
        githubUsers.push(userAccount);
        console.log(`
    O usuario:
    Id: ${userAccount.id},
    Login: ${userAccount.login},
    Name: ${userAccount.name}
    Foi salvo com sucesso.
    `);
    }).catch((error) => console.log(`${error}, account name: ${userName}`));
};
const showRepositoryAccount = (userName) => {
    const userAccount = getUser(userName);
    if (userAccount) {
        fetch(`https://api.github.com/users/${userName}/repos`).then((response) => response.json()).then((repo) => {
            for (let i = 0; i < 3; i++) {
                const userRepo = {
                    name: repo[i].name,
                    description: repo[i].description,
                    fork: repo[i].fork,
                    stargazers_count: repo[i].stargazers_count
                };
                userAccount.repos.push(userRepo);
            }
            ;
            let list = `
      Account Id: ${userAccount.id},
      Account Login: ${userAccount.login},
      Account Name: ${userAccount.name},
      Account Repos: ${userAccount.repos}\n
      Lista dos Repositorios`;
            userAccount.repos.forEach((repo) => {
                list += `
          Nome: ${repo.name},
          Descriçao: ${repo.description},
          Fork: ${repo.fork},
          Popularidade: ${repo.stargazers_count}
        `;
            });
            console.log(list);
        });
    }
    else
        console.log(`Not Found, account name: ${userName}`);
};
const showAllAccounts = () => {
    let allAccounts = `
  Show All Accounts\n
  `;
    githubUsers.forEach(userAccount => {
        allAccounts += `
      Id: ${userAccount.id},
      Login: ${userAccount.login},
      Name: ${userAccount.name},
      Bio: ${userAccount.bio},
      Public Repository: ${userAccount.public_repos},
      Repository URL: ${userAccount.repos_url}
      Repositoy: ${userAccount.repos}\n
    `;
    });
    console.log(allAccounts);
};
const calculateRepositoryAccountLocal = (userName) => {
    const userAccount = getUser(userName);
    if (userAccount) {
        const lenghtRepository = userAccount.repos.length;
        console.log(`The total of repositories in the account ${userAccount.name} is: ${lenghtRepository}`);
    }
    else
        console.log(`Not Found, account name: ${userName}`);
};
const calculateRepositoryAccount = (userName) => {
    fetch(`https://api.github.com/users/${userName}/repos`).then(res => res.json()).then(repo => console.log(`The total of repositories in the account ${userName} is: ${Object.keys(repo).length}`)).catch(err => console.log(`${err.message}, account name: ${userName}`));
};
async function main() {
    await fetchUser('ViniciusJMoreira');
    await fetchUser('Molombo');
    await fetchUser('Poison');
    await showUser('ViniciusJMoreira');
    showTotalRepository();
    showTopFive();
}
