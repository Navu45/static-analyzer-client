import {Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export function Repository(props)
{
    const repository = props.repo
    const link = "https:/github.com/" + props.repo.owner + "/" + props.repo.repo;

    const handleClick = function () {
        props.startAnalyze(repository)
    }
    return <Grid item key={props.key} xs={12} sm={6} md={4}>
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
                    Repository {props.key}
                </Typography>
                <Typography>
                    Repository: {<Link href={link}> {link} </Link>}
                </Typography>
                <Typography>
                    Owner: {props.repo.owner}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={handleClick}>Analyze</Button>
                <Button size="large">Edit</Button>
            </CardActions>
        </Card>
    </Grid>
}