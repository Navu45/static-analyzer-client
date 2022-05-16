
import {Grid} from "@mui/material";
import MainFeaturedPost from "../dashboard/MainPost";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Post from "../dashboard/Post";

function Home(){
    return(
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <MainFeaturedPost post={{
                image: "https://source.unsplash.com/random",
                title: "Welcome to Architecture control tool",
                description:
                    <Grid>
                        <Typography> This is a simple static analyzer that explore your
                    GitHub repository Java project on Clean Architecture pattern.</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography> First, add a few JAVADOC comments with these annotations to each .java
                            file so that the parser can get what Clean Architecture level this class belongs to.</Typography>
                    </Grid>,
                linkText: "Try it out!"
            }}/>
            <Typography component="h2" variant="h5" sx={{ml: '6vh'}}>Architecture layers</Typography>
            <Divider sx={{m: '3vh'}}/>
            <Grid container spacing={4}>
                <Post post={{
                    title: "@DomainEntity",
                    subtitle: "Enterprise Domain Rules",
                    description: "Business logic that is common to many applications.",
                    image: "https://source.unsplash.com/random"
                }}/>
                <Post post={{
                    title: "@UseCase",
                    subtitle: "Application Business Rules",
                    description: "Application logic.",
                    image: "https://source.unsplash.com/random"
                }}/>
                <Post post={{
                    title: "@InterfaceAdapter",
                    subtitle: "Interface Adapters",
                    description: "Adapters between Use Cases and the outside world. This includes Presenters\n" +
                        "                        from MVPs, as well as Gateways (the more popular name for the repository).",
                    image: "https://source.unsplash.com/random"
                }}/>
                <Post post={{
                    title: "@Framework",
                    subtitle: "Frameworks & Drivers",
                    description: "The outermost layer, everything else lies here:\n" +
                        "                        UI, database, http client, etc.",
                    image: "https://source.unsplash.com/random"
                }}/>
            </Grid>

        </Grid>
    );
};

export default Home;