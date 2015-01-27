var DetailTag = React.createClass({displayName: "DetailTag",
  render: function () {
    return (React.createElement("span", {className: "tag"},  this.props.name));
  }
});