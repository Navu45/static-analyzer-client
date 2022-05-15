import './css/content.css'
import React, {useState} from "react";
import SignInSide from "./components/sites/signIn";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "./components/common/AppBar";
import Sidebar from "./components/common/Sidebar";
import Routes from "./routes/routes";
import Router from "./routes/router";
import {useUser} from "./services/contexts/UserContext";
import {red} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

function App() {
    const {user} = useUser();

    // Sidebar toggle
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    if (user.name === "Anonymous")
    return(
        <SignInSide/>
    )
    else {
        return(
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    {AppBar (open, toggleDrawer)}
                    <Router>
                        {Sidebar(open, toggleDrawer)}
                        <Routes/>
                    </Router>
                </Box>
            </ThemeProvider>
        )
    }
}
export default App;
