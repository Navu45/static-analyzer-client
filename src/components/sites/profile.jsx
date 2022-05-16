import {useAuth} from "../../services/contexts/AuthContext";
import Typography from "@mui/material/Typography";
import {Paper, Stack} from "@mui/material";
import {View} from "react-native-web";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

function Profile(){
    const {user} = useAuth();
    console.log({user})
    return(
        <View>
            <Typography>{user.name}</Typography>
            <Stack
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <Button component={Paper}>Item 1</Button>
                <Button component={Paper}>Item 2</Button>
                <Button component={Paper}>Item 3</Button>
            </Stack>
        </View>
    );
};

export default Profile;