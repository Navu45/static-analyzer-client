function GitRepositories(props){
    const repos = props.repo;
    let result = [];
    repos.forEach(repo => result.push(<li><p>{repo}</p></li>))
    return(result);
}
export default GitRepositories;