import {Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export function Repository(key, link, owner)
{
    return <Grid item key={key} xs={12} sm={6} md={4}>
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    Repository {key}
                </Typography>
                <Typography>
                    Repository: {<Link href={link}> {link} </Link>}
                </Typography>
                <Typography>
                    Owner: {owner}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Analyze</Button>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    </Grid>
}