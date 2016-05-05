var USER_DATA = {
  name: 'Panshul Gupta',
  username: 'panshul007',
  image: 'https://avatars0.githubusercontent.com/u/745298?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

/**
* {this.props.children} will give the value between the tags of the component.
* in this case the value will be {this.props.username} as given in the ProfileLink
* component. or the the parent component, between the <Link> tags.
*/
var Link = React.createClass({
  changeURL: function () {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
