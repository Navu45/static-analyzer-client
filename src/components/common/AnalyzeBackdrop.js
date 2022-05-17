import {Backdrop, CircularProgress} from "@mui/material";
import * as React from "react";

export default function AnalyzeBackdrop() {
    const [backdrop, setOpenBackdrop] = React.useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    const handleOpenBackdrop = () => {
        setOpenBackdrop(true);
    };

    return {
        backdrop: <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={backdrop}
            onClick={handleCloseBackdrop}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>,
        handleOpenBackdrop,
        handleCloseBackdrop
    }
}