import React from 'react';
import PropTypes from 'prop-types';

const ActionMenu = ({ comments }) => (
    <ul>
        <li>{comments} comentários</li>
        <li>Editar</li>
        <li>Excluir</li>
    </ul>
);

ActionMenu.propTypes = {
    comments: PropTypes.number,
};

ActionMenu.defaultProps = {
    comments: 0,
};

export default ActionMenu;
