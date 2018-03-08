import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoteScore extends Component {
    constructor(props) {
        super(props);
        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);
    }

    voteUp() {
        this.props.onUpdate(this.props.id, 'upVote');
    }

    voteDown() {
        this.props.onUpdate(this.props.id, 'downVote');
    }

    render() {
        return (
            <div>
                <div><button onClick={this.voteDown}>-</button></div>
                <div>{this.props.count}</div>
                <div><button onClick={this.voteUp}>+</button></div>
            </div>
        );
    }
}

VoteScore.propTypes = {
    id: PropTypes.string.isRequired,
    count: PropTypes.number,
    onUpdate: PropTypes.func.isRequired,
};
VoteScore.defaultProps = {
    count: 0,
};

export default VoteScore;
