

export const getRepos = inputValue => fetch(`https://api.github.com/search/repositories?q=${inputValue}`).then(res => res.json())