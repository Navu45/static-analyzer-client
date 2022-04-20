import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <nav className="flex-item">
            <ul>
                <li><Link to="\">Main</Link></li>
                <li><Link to="\">Main</Link></li>
                <li><Link to="\">Main</Link></li>
                <li><Link to="\">Main</Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;