import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from './elements/menu';
import PostList from './pages/postList';
import PostView from './pages/postView';

const App = ({ categories }) => (
    <div>
        <Menu categories={categories} />
        <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/post/create" component={PostView} />
            <Route path="/post/:postId" component={PostView} />
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

export default withRouter(connect(mapStateToProps)(App));
