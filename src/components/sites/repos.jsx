import {Grid, Toolbar} from "@mui/material";
import {Repository} from "../dashboard/Repository";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {pink} from "@mui/material/colors";
import FormDialog from "../dashboard/AddRepoDialog";
import {useAnalysis} from "../../services/contexts/AnalysisContext";
import {useAuth} from "../../services/contexts/AuthContext";
import {useEffect, useState} from "react";

function GitRepositories(){
    const {user} = useAuth()
    const [firstLoad, setFirstLoad] = useState(true);
    const {repositories, analyserService, setRepositories} = useAnalysis()

    useEffect(() => {
        analyserService.allRepos(user.token).then(res => {
            const repos = res
            console.log(repos)
            setRepositories(repos)
        })
        return () => {
            setFirstLoad(false); // This worked for me
        };
    }, [analyserService, firstLoad, setRepositories, user.token]);

    console.log({repositories})
    const result = repositories.length !== 0 ? repositories.map((repo, i) =>{
        const link = "https:/github.com/" + repo.owner + "/" + repo.repo;
        return Repository(i, link, repo.owner)
    }) : [];

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log("here1")
        setOpen(true);
    };

    const handleClose = () => {
        console.log("here2")
        setOpen(false);
    };

    return <Grid container spacing={4}>
            {result}
            <IconButton sx={{
                position: 'absolute',
                bottom: "6vh",
                right: "6vh",
            }}
                        color="secondary" onClick={handleClickOpen}>
                <AddCircleIcon
                    sx={{color: pink[500],
                        height: "10vh",
                        width: "10vh",
                        fontSize: 100}}/>
            </IconButton>
            <FormDialog open={open} handleClose={handleClose}/>
        </Grid>;
}
export default GitRepositories;

