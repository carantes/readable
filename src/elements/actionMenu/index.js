import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActionMenu extends Component {
    constructor(props) {
        super(props);
        this.deleteAction = this.deleteAction.bind(this);
    }

    deleteAction() {
        const { id, onDelete } = this.props;
        onDelete(id);
    }

    render() {
        const { comments } = this.props;
        return (
            <ul>
                <li>{comments}&nbsp;comentários</li>
                <li>editar</li>
                <li><button onClick={this.deleteAction}>excluir</button></li>
            </ul>
        );
    }
}

ActionMenu.propTypes = {
    comments: PropTypes.number,
};

ActionMenu.defaultProps = {
    comments: 0,
};

export default ActionMenu;
