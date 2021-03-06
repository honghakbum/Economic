import React, { Component } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  DataPage,
  DiscussionDetailPage,
  DiscussionPage,
  DiscussionSubPage,
  HomePage,
  NewsListPage,
  NewsDetailPage,
  NewsPage,
  StartUpDetailPage,
  StartUpPage,
  Nomatch,
  Contact,
  Recrutement,
  RecrutementSuccess,
  ContactSuccess
  } from './components/Pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
          <div className="App">
            <div className="App-intro">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/data" component={DataPage}/>
                <Route path="/data:search" component={DataPage}/>
                <Route exact path="/discussion" component={DiscussionPage}/>
                <Route exact path="/discussion/sub" component={DiscussionSubPage}/>
                <Route exact path="/discussion/sub/detail" component={DiscussionDetailPage}/>
                <Route path="/discussion/sub/detail:pros" component={DiscussionDetailPage}/>
                <Route exact path="/news" component={NewsPage}/>
                <Route exact path="/news/list" component={NewsListPage}/>
                <Route exact path="/news/list/detail" component={NewsDetailPage}/>
                <Route path="/news/list/detail:post" component={NewsDetailPage}/>
                <Route exact path="/startup" component={StartUpPage}/>
                <Route exact path="/startup/detail" component={StartUpDetailPage}/>
                <Route exact path="/contact" component={Contact}/>
                <Route path="/contact:success" component={ContactSuccess}/>
                <Route exact path="/recrutement" component={Recrutement}/>
                <Route path="/recrutement:success" component={RecrutementSuccess}/>
                <Route component={Nomatch}/>
              </Switch>
            </div>
          </div>
        </Router>
      </BrowserRouter>
    );
  }
}

export default App;
