import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PageContent from './Component/PageContent/PageContent';
import PageAdmin from './Component/PageAdmin/PageAdmin';

export default () => (
    <Switch>
        <Route path="/" exact component={PageContent}/>
        <Route path="/admin" exact component={PageAdmin}/>
    </Switch>
);