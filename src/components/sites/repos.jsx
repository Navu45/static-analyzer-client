import {ListItem} from "@mui/material";

function GitRepositories(props){
    return(props.map((repo, i) => (
        <ListItem key={i} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{repo}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )));
}
export default GitRepositories;