import {useDispatch, useSelector} from "react-redux";
import {check, checkboxSelector} from "./checkboxSlice";


function Checkbox(props) {
    const checked = useSelector(checkboxSelector);
    const dispatch = useDispatch();

    return(
        <div>
            <input type="checkbox" checked={checked} onChange={() => dispatch(check())} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default Checkbox;