import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const getMenuItems = (categories) => {
    const home = { name: 'Home', link: '/' };
    const menuLinks = [home];
    categories.map(category => menuLinks.push({ name: category.name, link: category.name }));
    return menuLinks;
};

const Menu = ({ categories }) => (
    <ul>
        {
            getMenuItems(categories).map(category => (
                <li key={category.name}>
                    <Link to={category.link}>{category.name}</Link>
                </li>
            ))
        }
        <li><Link to="/create">New Post</Link></li>
    </ul>
);

Menu.defaultProps = {
    categories: [],
};

Menu.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Menu;
