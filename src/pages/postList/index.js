import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from '../../elements/post';

import { fetchPosts } from '../../actions/posts';

class PostList extends Component {
    componentDidMount() {
        this.props.loadPostsInitialData(this.props.match.params.category);
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="App">
                <ul>
                    { posts.map(post => (
                        <li key={post.id}><Post {...post} /></li>
                    )) }
                </ul>
            </div>
        );
    }
}

PostList.propTypes = {
    match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    posts: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

PostList.defaultProps = {
    match: {},
    posts: [],
};

const mapDispatchToProps = dispatch => ({
    loadPostsInitialData(category) {
        dispatch(fetchPosts(category));
    },
});

const mapStateToProps = ({ posts }) => ({
    posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
