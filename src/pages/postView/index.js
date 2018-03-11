import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchInsertPost, fetchUpdatePost, fetchGetPostById } from '../../actions/posts';

class PostView extends Component {
    constructor(props) {
        super(props);

        const { postId } = this.props.match.params;

        this.state = {
            postId,
            title: '',
            body: '',
            author: '',
            category: '',
        };

        if (postId) {
            fetchGetPostById(postId, post => this.setState(post));
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const { target } = event;
        const {
            name, type, checked, value,
        } = target;
        const data = type === 'checkbox' ? checked : value;

        this.setState({
            [name]: data,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const redirect = this.context.router.history.push('/');

        if (this.state.postId) {
            this.props.updatePost(this.state)
                .then(() => redirect);
        } else {
            this.props.createPost(this.state)
                .then(() => redirect);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="form2">
                    <div>
                        <label htmlFor="category" className="d-block">
                            Category:
                            <select value={this.state.category} onChange={this.handleChange} readOnly={this.state.postId} >
                                {this.props.categories.map(category => (
                                    <option key={category.name} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="title">
                            Title:
                            <input
                                name="title"
                                type="text"
                                placeholder="Digite o titulo"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="body">
                            Body:
                            <textarea
                                name="body"
                                value={this.state.body}
                                placeholder="Digite os detalhes"
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="author">
                            Author:
                            <input
                                name="author"
                                type="text"
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                placeholder="Digite o nome do Autor"
                                readOnly={this.state.postId}
                            />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}

PostView.propTypes = {
    match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    createPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    categories: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

PostView.defaultProps = {
    match: {},
    categories: [],
};

const mapDispatchToProps = dispatch => ({
    createPost(post) {
        return dispatch(fetchInsertPost(post));
    },
    updatePost(post) {
        return dispatch(fetchUpdatePost(post));
    },
});

const mapStateToProps = ({ categories }) => ({
    categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
