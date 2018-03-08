import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Text, Select, TextArea } from 'react-form';
import PropTypes from 'prop-types';

import { fetchPostPost } from '../../actions/posts';

class PostCreate extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    getCategoryList() {
        const categoryList = this.props.categories.map(category =>
            ({ label: category.name, value: category.name }));
        return categoryList;
    }

    submitForm(values) {
        console.log(values);
        this.props.savePost(values);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.submitForm}>
                    {formApi => (
                        <form onSubmit={formApi.submitForm} id="form2">
                            <div>
                                <label htmlFor="category" className="d-block">
                                    Category:
                                    <Select field="category" id="category" options={this.getCategoryList()} className="mb-4" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="title">
                                    Title:
                                    <Text field="title" id="title" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="body">
                                    Body:
                                    <TextArea field="body" id="body" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="author">
                                    Author:
                                    <Text field="author" id="author" />
                                </label>
                            </div>
                            <div>
                                <button type="submit" className="mb-4 btn btn-primary">Save</button>
                            </div>
                        </form>
                    )}
                </Form>
            </div>
        );
    }
}

PostCreate.propTypes = {
    categories: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

PostCreate.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);
