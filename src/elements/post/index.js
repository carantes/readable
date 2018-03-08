import React from 'react';
import PropTypes from 'prop-types';
import VoteScore from '../voteScore';
import ActionMenu from '../actionMenu';

const Post = ({
    id,
    category,
    author,
    title,
    body,
    commentCount,
    voteScore,
    onUpdateVoteScore,
    onDeletePost,
}) => (
    <div>
        <div><VoteScore id={id} count={voteScore} onUpdate={onUpdateVoteScore} /></div>
        <div>{author}</div>
        <div>
            <div>{title}&nbsp;({category})</div>
            <div>{body}</div>
            <div><ActionMenu id={id} comments={commentCount} onDelete={onDeletePost} /></div>
        </div>
    </div>
);

Post.propTypes = {
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    voteScore: PropTypes.number,
    commentCount: PropTypes.number,
    onUpdateVoteScore: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
};

Post.defaultProps = {
    voteScore: 0,
    commentCount: 0,
};

export default Post;
