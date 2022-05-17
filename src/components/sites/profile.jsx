import {useAuth} from "../../services/contexts/AuthContext";
import Typography from "@mui/material/Typography";
import {ButtonBase, Grid, Paper} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {deepPurple} from "@mui/material/colors";
import {styled} from "@mui/material/styles";


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function Profile() {
    const {user} = useAuth();
    console.log({user})
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 1000,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{width: 128, height: 128}}>
                        <Avatar sx={{width: 128, height: 128, bgcolor: deepPurple[500]}}>YOU</Avatar>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Email: {user.email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{cursor: 'pointer'}} variant="body2">
                                Edit
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Profile;