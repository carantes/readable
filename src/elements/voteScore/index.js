import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoteScore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.votes,
        };

        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);
    }

    voteUp() {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }));
    }

    voteDown() {
        this.setState(prevState => ({
            counter: prevState.counter - 1,
        }));
    }

    render() {
        return (
            <div>
                <div><button onClick={this.voteDown}>-</button></div>
                <div>{this.state.counter}</div>
                <div><button onClick={this.voteUp}>+</button></div>
            </div>
        );
    }
}

VoteScore.propTypes = {
    votes: PropTypes.number,
};
VoteScore.defaultProps = {
    votes: 0,
};

export default VoteScore;
