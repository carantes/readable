import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPostPost, fetchGetPost } from '../../actions/posts';

class PostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            author: '',
            category: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        const { match } = this.props;

        if (match.params.postId) {
            fetchGetPost(match.params.postId)
                .then(data => this.setState(data));
        }
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

        console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.savePost(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="form2">
                    <div>
                        <label htmlFor="category" className="d-block">
                            Category:
                            <select value={this.state.category} onChange={this.handleChange}>
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
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="body">
                            Body:
                            <textarea
                                value={this.state.body}
                                onChange={this.handleChange}
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
    savePost: PropTypes.func.isRequired,
    categories: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

PostView.defaultProps = {
    match: {},
    categories: [],
};

const mapDispatchToProps = dispatch => ({
    savePost(post) {
        dispatch(fetchPostPost(post));
    },
});

const mapStateToProps = ({ categories }) => ({
    categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
