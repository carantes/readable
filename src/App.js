import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from './elements/menu';
import PostList from './pages/postList';
import PostCreate from './pages/postCreate';

const App = ({ categories }) => (
    <div>
        <Menu categories={categories} />
        <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/create" component={PostCreate} />
            <Route path="/:category" component={PostList} />
        </Switch>
    </div>
);

App.propTypes = {
    categories: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

App.defaultProps = {
    categories: [],
};

const mapStateToProps = ({ categories }) => ({
    categories,
});

export default connect(mapStateToProps)(App);
