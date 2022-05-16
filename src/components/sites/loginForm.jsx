import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import * as React from "react";
import {useAuthProvider} from "../../services/contexts/AuthContext";

export default function LoginForm()
{
    const {userService, setUser, user} = useAuthProvider();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            username: data.get("username"),
            password: data.get("password")
        })
        userService.login({
            username: data.get("username"),
            password: data.get("password")
        }).then(response => {
            console.log({response})
            if (response.data.user !== undefined)
            {
                setUser({
                    name:  response.data.user.firstName + response.data.user.lastName,
                    token: response.headers['Authorisation'],
                    email: response.data.user.email
                })
                localStorage.setItem("name", user.name)
                localStorage.setItem("token", user.token)
                localStorage.setItem("email", user.email)
            }
        });
    };

    return <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Sign In
        </Button>
        <Grid container>
            <Grid item xs>
                {/*<Link href="#" variant="body2">*/}
                {/*    {"Forgot password?"}*/}
                {/*</Link>*/}
            </Grid>
            <Grid item>
                <Link href={"/auth/registration"} variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </Grid>
    </Box>
}