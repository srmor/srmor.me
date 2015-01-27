var DetailTag = React.createClass({displayName: "DetailTag",
  handleTagClick: function() {
    this.props.handleTagClick(this.props.name);
  },
  render: function () {
    return (React.createElement("span", {className: "tag", onClick:  this.handleTagClick},  this.props.name));
  }
});