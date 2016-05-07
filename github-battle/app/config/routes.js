var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer')

var routes = (
  <Router history ={hashHistory}>
    <Route path='/'  component={Main}>
      <Route path='/home' component={Home} />
      <IndexRoute component={Home} /> // when none of the routes match, this route will be loaded as default.
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
