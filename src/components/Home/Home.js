import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Redirect} from 'react-router';

import './Home.css';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Blog from '../Blog/Blog';


const Home = () => {

    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Main} key="main"/>
                {/*<Route path="/pobierzlekcje/" exact component={Blog} key="blog"/>*/}
                {/*<Route path="/pobierzlekcje/:year/:month/:id" exact component={Blog} key="blog-entry"/>*/}
                <Route render={() => <Redirect to="/"/>} key="default"/>
            </Switch>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        loaded: state.pageLoaded
    }
};

export default withRouter(connect(mapStateToProps)(Home));