import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <nav className="flex-item">
            <ul>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/git-repos">Git repositories</Link></li>
                <li><Link to="/analyze">Go to Analyze Page</Link></li>
                <li><Link to="/agreement">Agreement</Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;