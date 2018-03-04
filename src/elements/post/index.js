import React from 'react';
import PropTypes from 'prop-types';
import VoteScore from '../voteScore';
import ActionMenu from '../actionMenu';

const Post = ({
    category,
    author,
    title,
    body,
    commentCount,
    voteScore,
}) => (
    <div>
        <div><VoteScore votes={voteScore} /></div>
        <div>{author}</div>
        <div>
            <div>{title}&nbsp;({category})</div>
            <div>{body}</div>
            <div><ActionMenu comments={commentCount} /></div>
        </div>
    </div>
);

Post.propTypes = {
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    voteScore: PropTypes.number,
    commentCount: PropTypes.number,
};

Post.defaultProps = {
    voteScore: 0,
    commentCount: 0,
};

export default Post;
