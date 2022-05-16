import './css/content.css'
import React, {useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "./components/common/AppBar";
import Sidebar from "./components/common/Sidebar";
import Router from "./routes/router";
import {red} from "@mui/material/colors";
import {useAuthProvider} from "./services/contexts/AuthContext"
import {Routes} from "./routes/routes";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

function App() {
    const {user} = useAuthProvider();

    // Sidebar toggle
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    console.log({user})
    console.log(user.name === "")
    if (user.name === "") {
        return(
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Router>
                        <Routes/>
                    </Router>
                </Box>
            </ThemeProvider>
        )
    }
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
