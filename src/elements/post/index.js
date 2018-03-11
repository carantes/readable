import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import VoteScore from '../voteScore';
import ActionMenu from '../actionMenu';
import CommentList from '../commentList';

const Post = ({
    id,
    category,
    author,
    title,
    body,
    commentCount,
    comments,
    voteScore,
    showComments,
    onUpdatePostScore,
    onUpdateCommentScore,
    onDeletePost,
    onCommentClick,
}) => (
    <div>
        <div><VoteScore id={id} count={voteScore} onUpdate={onUpdatePostScore} /></div>
        <div>{author}</div>
        <div>
            <div><Link to={`/post/${id}`} >{title}&nbsp;({category})</Link></div>
            <div>{body}</div>
            <div>
                {comments.length > 0 ?
                    <CommentList comments={comments} onUpdateCommentScore={onUpdateCommentScore} />
                    :
                    <span><Link to="/" onClick={() => onCommentClick(id)} >{commentCount}&nbsp;comentários</Link></span>
                }
            </div>
            <div><ActionMenu id={id} onDelete={onDeletePost} /></div>
        </div>
    </div>
);

Post.propTypes = {
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    commentCount: PropTypes.number,
    comments: PropTypes.arrayOf(Object),
    voteScore: PropTypes.number,
    showComments: PropTypes.bool,
    onUpdatePostScore: PropTypes.func.isRequired,
    onUpdateCommentScore: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
    onCommentClick: PropTypes.func.isRequired,
};

Post.defaultProps = {
    voteScore: 0,
    commentCount: 0,
    showComments: false,
    comments: [],
};

export default Post;
