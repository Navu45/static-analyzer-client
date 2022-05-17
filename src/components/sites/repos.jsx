import {Grid} from "@mui/material";
import {Repository} from "../common/Repository";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {useEffect, useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {pink} from "@mui/material/colors";
import FormDialog from "../common/AddRepoDialog";
import {useAnalysis} from "../../services/contexts/AnalysisContext";
import {useAuth} from "../../services/contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import AnalyzeBackdrop from "../common/AnalyzeBackdrop";

function GitRepositories() {
    const {user} = useAuth()
    const [firstLoad, setFirstLoad] = useState(true);
    const {repositories, analyserService, setRepositories, setLastReview} = useAnalysis()
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);
    const {backdrop, handleOpenBackdrop} = AnalyzeBackdrop()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const startAnalyze = function (repository) {
        handleOpenBackdrop()
        analyserService.analyze(repository, user.token).then(data => {
            setLastReview(data)
            navigate("/analyze")
        })
    }

    useEffect(() => {
        analyserService.allRepos(user.token).then(repositories => {
            setRepositories(repositories)
        })
        return () => {
            setFirstLoad(false); // This worked for me
        };
    }, [analyserService, firstLoad, setRepositories, user.token]);

    console.log({repositories})
    const result = repositories.length !== 0 ? repositories.map((repo, i) => {
        return <Repository key={i} startAnalyze={startAnalyze} repo={repo}/>
    }) : [];


    return <Grid container spacing={4}>
        {result}
        <IconButton sx={{
            position: 'absolute',
            bottom: "6vh",
            right: "6vh",
        }}
                    color="secondary" onClick={handleClickOpen}>
            <AddCircleIcon
                sx={{
                    color: pink[500],
                    height: "10vh",
                    width: "10vh",
                    fontSize: 100
                }}/>
        </IconButton>
        <FormDialog open={open} handleClose={handleClose}/>
        {backdrop}
    </Grid>;
}

export default GitRepositories;

