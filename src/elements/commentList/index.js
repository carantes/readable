import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';
import CommentForm from '../commentForm';

const CommentList = ({ comments, onUpdateCommentScore }) => (
    <ul>
        <CommentForm />
        { comments.map(comment => (
            <li key={comment.id}>
                <Comment {...comment} onUpdateCommentScore={onUpdateCommentScore} />
            </li>
        )) }
    </ul>
);

CommentList.propTypes = {
    comments: PropTypes.arrayOf(Object),
    onUpdateCommentScore: PropTypes.func.isRequired,
};

CommentList.defaultProps = {
    comments: [],
};

export default CommentList;
