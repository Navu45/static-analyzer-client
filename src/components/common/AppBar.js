import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import LogoutIcon from '@mui/icons-material/Logout';
import * as React from "react";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {drawerWidth} from "./Dashboard";
import {anonymous, useAuthProvider} from "../../services/contexts/AuthContext";

const MyAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function AppBar(open, toggleDrawer)
{
    const {setUser} = useAuthProvider()
    function logout() {
        setUser(anonymous)
    }

    return(
        <MyAppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Clean Architecture Static Analyzer
                </Typography>

                <IconButton color="inherit" onClick={logout}>
                    <Typography sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}>Logout</Typography>
                    <Badge color="secondary">
                        <LogoutIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </MyAppBar>
    )
}