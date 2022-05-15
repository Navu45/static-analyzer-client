import {Grid} from "@mui/material";
import {Repository} from "../dashboard/Repository";

function GitRepositories(props){
    const repos = props.repos;

    const result = repos.map((repo, i) =>{
        const link = "https:/github.com/" + repo.owner + "/" + repo.name;
        return Repository(i, link, repo.owner)
    });
    return  <Grid container spacing={4}>
        {result}
    </Grid>;
}
export default GitRepositories;

