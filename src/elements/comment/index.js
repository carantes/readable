import React from 'react';
import PropTypes from 'prop-types';
import VoteScore from '../voteScore';

const Comment = ({
    id, body, author, timestamp, voteCount, deleted, onUpdateCommentScore,
}) => (
    <div>
        <div><VoteScore id={id} count={voteCount} onUpdate={onUpdateCommentScore} /></div>
        <div>{author}</div>
        <div>
            <div>{body}</div>
        </div>
    </div>
);

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onUpdateCommentScore: PropTypes.func.isRequired,
    voteCount: PropTypes.number,
};

Comment.defaultProps = {
    voteCount: 0,
};

export default Comment;
