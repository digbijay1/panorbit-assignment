import React from 'react'
import {Link} from "react-router-dom";
function Menu() {
    return (
      <div>
        <Link to="/tableDetail/profile">Profile</Link>
        <Link to="/tableDetail/gallery">Gallery</Link>
        <Link to="/tableDetail/todo">ToDo</Link>
        <Link to="/tableDetail/post">Post</Link>
      </div>
    );
}

export default Menu
