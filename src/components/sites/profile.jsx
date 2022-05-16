import {Text} from "@rneui/themed";
import {useAuthProvider} from "../../services/contexts/AuthContext";

function Profile(){
    const {user} = useAuthProvider();
    console.log({user})
    return(
        <Text>{user.name}</Text>
    );
};

export default Profile;