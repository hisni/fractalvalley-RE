import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/about" Type="Reset">About</NavigationItem>
        
        { !props.isAuthenticated
            ? <NavigationItem link="/login">Login</NavigationItem> 
            : <NavigationItem link="/profile">Profile</NavigationItem> }

        { !props.isAuthenticated
            ? <NavigationItem link="/register">Register</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem> }
    </ul>
);

export default navigationItems;