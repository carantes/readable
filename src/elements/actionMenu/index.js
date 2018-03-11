import React from 'react';
import PropTypes from 'prop-types';

const ActionMenu = ({ onDelete, id }) => (
    <ul>
        <li><button onClick={() => onDelete(id)}>excluir</button></li>
    </ul>
);

ActionMenu.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ActionMenu;
