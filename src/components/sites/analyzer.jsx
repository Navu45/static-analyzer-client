import {Text} from "@rneui/themed";
import {useAnalysis} from "../../services/contexts/AnalysisContext";
import Title from "../dashboard/Title";
import {Alert, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack} from "@mui/material";
import {useEffect} from "react";
import {Repository} from "../dashboard/Repository";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AnalyzeBackdrop from "../dashboard/AnalyzeBackdrop";
import {useAuth} from "../../services/contexts/AuthContext";
import {useNavigate} from "react-router-dom";

const errorTypes = [
    "ERROR", "WARNING", "SUCCESS"
]

function getSeverity(problemType){
    return problemType.toLowerCase()
}

function Analyzer(){
    const {user} = useAuth()
    const {lastReview, analyserService, setLastReview} = useAnalysis()
    const {backdrop, handleOpenBackdrop, handleCloseBackdrop} = AnalyzeBackdrop()
    const navigate = useNavigate()
    const problemList = lastReview.problems.map(problem =>
        <Grid component={Paper}>
            <Alert severity={getSeverity(problem.type)}>{problem.text}</Alert>
        </Grid>
    );

    const handleClick = function () {
        handleOpenBackdrop()
        analyserService.analyze(lastReview.repo, user.token).then(data => {
            setLastReview(data)
            navigate("/analyze")
            handleCloseBackdrop()
        })
    }

    if (lastReview.repo === null)
    {
        return <Title>Go to Repositories Page and Pick one to analyze!</Title>
    }

    const link = "https:/github.com/" + lastReview.repo.owner + "/" + lastReview.repo.repo;
    return <Stack>
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
                sx={{height: "30vh"}}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    Current Repository
                </Typography>
                <Typography>
                    Repository: {<Link href={link}> {link} </Link>}
                </Typography>
                <Typography>
                    Owner: {lastReview.repo.owner}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={handleClick}>Analyze Again</Button>
                <Button size="large">Edit</Button>
            </CardActions>
        </Card>
        <Typography sx={{mt: '4vh', ml: '3vh'}} variant="h4" component="h2">
            Problems
        </Typography>
        <Divider sx={{m: '3vh'}}/>
        <Stack sx={{ width: '100%' }} spacing={2}>
            {problemList}
        </Stack>
        {backdrop}
    </Stack>


}
export default Analyzer;