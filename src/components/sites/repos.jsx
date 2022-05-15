import {ListItem} from "@mui/material";

function GitRepositories(props){
    const repos = props.repos;
    return(repos.map((repo, i) => (
        <ListItem key={i} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{repo}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )));
}
export default GitRepositories;