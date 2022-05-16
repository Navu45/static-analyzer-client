import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Drawer} from "./Dashboard";
import {View} from "react-native-web";

export default function Sidebar(open, toggleDrawer) {
    return <Drawer variant="permanent" open={open}>
        <Toolbar
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
            }}
        >
            <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
            </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
        </List>
    </Drawer>
}

const mainListItems = (
    <View>
        <ListItemButton component={RouterLink} to="/" >
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Main page" />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/profile" >
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/git-repos" >
            <ListItemIcon>
                <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Git Repositories" />
        </ListItemButton>
    </View>
);

const secondaryListItems = (
    <View>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton component={RouterLink} to="/analyze" >
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last review" />
        </ListItemButton>
    </View>
);