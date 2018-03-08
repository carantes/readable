import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from '../../elements/post';

import { fetchGetPosts, fetchUpdatePostVotes, fetchDeletePost } from '../../actions/posts';

class PostList extends Component {
    componentDidMount() {
        this.props.loadPosts(this.props.match.params.category);
    }

    render() {
        const { posts, updateVote, deletePost } = this.props;
        return (
            <div className="App">
                <ul>
                    { posts.map(post => (
                        <li key={post.id}><Post {...post} onUpdateVoteScore={updateVote} onDeletePost={deletePost} /></li>
                    )) }
                </ul>
            </div>
        );
    }
}

PostList.propTypes = {
    match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    posts: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    loadPosts: PropTypes.func.isRequired,
    updateVote: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
};

PostList.defaultProps = {
    match: {},
    posts: [],
};

const mapDispatchToProps = dispatch => ({
    loadPosts(category) {
        dispatch(fetchGetPosts(category));
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
