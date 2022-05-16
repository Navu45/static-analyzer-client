import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useAnalysis} from "../../services/contexts/AnalysisContext";
import {useAuth} from "../../services/contexts/AuthContext";
import Box from "@mui/material/Box";


export default function FormDialog(props) {
    const {analyserService, setRepositories} = useAnalysis()
    const {user} = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        props.handleClose()
        analyserService.addRepo(
            {
                owner: data.get("owner"),
                repo: data.get("repo"),
                sourceDir: data.get("sourceDir")
            }, user.token
        ).then(res => setRepositories(res))
    }

    return (

        <Dialog open={props.open} onClose={props.handleClose} >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>

                    <DialogContentText>
                        Enter needed information to add repo to analyzer its code.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="owner"
                        name="owner"
                        label="Repo Owner"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="repo"
                        name="repo"
                        label="Repository name to analyze"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="sourceDir"
                        name="sourceDir"
                        label="Code Directory"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button type="submit">Add</Button>
            </DialogActions>
            </Box>
        </Dialog>
    );
}
