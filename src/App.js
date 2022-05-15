import './css/content.css'
import React from "react";
import Content from "./components/common/Content";
import SignInSide from "./components/sites/signIn";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "./components/common/AppBar";
import Sidebar from "./components/common/Sidebar";
import Routes from "./routes/routes";
import Divider from "@mui/material/Divider";
import Router from "./routes/router";

export const mdTheme = createTheme();

function App() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    // return <SignInSide/>

    return(
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {AppBar (open, toggleDrawer)}
                {Sidebar(open, toggleDrawer)}
                <Router>
                    <Routes/>
                </Router>
            </Box>
        </ThemeProvider>
    )
}

export default App;
