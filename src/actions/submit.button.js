import {useSelector} from "react-redux";
import {checkboxSelector} from "./checkboxSlice";

function SubmitButton() {
    const agreed = useSelector(checkboxSelector)
    return <input type="button" value="Submit" disabled={!agreed}>
    </input>
}

export default SubmitButton