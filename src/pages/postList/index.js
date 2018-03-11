import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Post from '../../elements/post';

import { fetchGetPosts, fetchUpdatePostVotes, fetchDeletePost } from '../../actions/posts';
import fetchGetComments from '../../actions/comments';

class PostList extends Component {
    componentDidMount() {
        const { match, loadPosts } = this.props;
        loadPosts(match.params.category);
    }

    render() {
        const { posts, updateVote, deletePost, location, loadComments } = this.props;
        // const activePost = queryString.parse(location.search).comment;
        return (
            <div className="App">
                <ul>
                    { posts.map(post => (
                        <li key={post.id}><Post {...post} onCommentClick={loadComments} onUpdatePostScore={updateVote} onUpdateCommentScore={updateVote} onDeletePost={deletePost} /></li>
                    )) }
                </ul>
            </div>
        );
    }
}

PostList.propTypes = {
    match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    posts: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    loadPosts: PropTypes.func.isRequired,
    loadComments: PropTypes.func.isRequired,
    updateVote: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
};

PostList.defaultProps = {
    match: {},
    location: {},
    posts: [],
};

const mapDispatchToProps = dispatch => ({
    loadPosts(category) {
        dispatch(fetchGetPosts(category));
    },
    loadComments(postId) {
        dispatch(fetchGetComments(postId));
    },
    updateVote(postId, option) {
        dispatch(fetchUpdatePostVotes(postId, option));
    },
    deletePost(postId) {
        dispatch(fetchDeletePost(postId));
    },
});

const mapStateToProps = ({ posts }) => ({
    posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
