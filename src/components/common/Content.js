import Dashboard from "./Dashboard";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {View} from "react-native-web";
import Title from "../dashboard/Title";
import Paper from "@mui/material/Paper";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Content(props){
    return (
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Paper elevation={6}>
                            <Title>{props.title}</Title>
                        </Paper>
                    </Grid>
                    <Grid container spacing={3}>
                        {props.content}
                    </Grid>
                </Container>
                <Copyright/>
            </Box>
    )
}
export default Content;