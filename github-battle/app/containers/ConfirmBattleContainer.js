var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('getInitialState')
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    console.log('componentDidMount')
    var query = this.props.location.query;
    //Fetch info from github then update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
    // the `this` context is bound to the function, so any references to `this` inside the function refer to the context outside the function.
    // else the `this.setState` method call inside the function will give error that the method is undefined.
  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },
  render: function () {
    return (
      <ConfirmBattle
         isLoading={this.state.isLoading}
         playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
