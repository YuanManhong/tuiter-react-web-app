import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    /*{
        active = 'explore'
    }*/
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill text-dark"></i> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash text-dark"></i> Explore
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-bezier2 text-dark"></i> Labs
            </Link>
            <Link className="list-group-item"><i className="bi bi-bell-fill text-dark"></i> Notifications</Link>
            <Link className="list-group-item"><i className="bi bi-envelope-fill text-dark"></i> Messages</Link>
            <Link className="list-group-item"><i className="bi bi-bookmarks-fill text-dark"></i> Bookmarks</Link>
            <Link className="list-group-item"><i className="bi bi-list-task text-dark"></i> Lists</Link>
            <Link className="list-group-item"><i className="bi bi-person-fill text-dark"></i> Profile</Link>
            <Link className="list-group-item"><i className="bi bi-three-dots text-dark"></i> More</Link>

        </div>
    );
};
/*    return (
        /!*<div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item ${active === 'home' ? 'active' : ''}`}>Home</a>
            <a className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>Explore</a>
            <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>Notifications</a>
            <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>Messages</a>
            <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>Bookmarks</a>
            <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>Lists</a>
            <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>Profile</a>
            <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}>More</a>

        </div>*!/
    )*/
export default NavigationSidebar;